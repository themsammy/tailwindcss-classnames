import _ from 'lodash';
import {TAllClassnames, TGeneratedClassnames} from '../types/classes';

export class FileContentGenerator {
  private _configPrefix: string;
  private _generatedClassNames: TGeneratedClassnames;

  /**
   * Initializes a new instance of the `FileContentGenerator` class.
   * @param generatedClassnames The generated classnames to put in the template.
   */
  constructor(generatedClassnames: TGeneratedClassnames, ConfigPrefix: string) {
    this._configPrefix = ConfigPrefix;
    this._generatedClassNames = generatedClassnames;
  }

  public generateFileContent = (): string => {
    return (
      this.fileHeaderTemplate() +
      '\n\n' +
      this.importStatementsTemplate() +
      '\n\n' +
      this.allClassnamesTypesTemplate() +
      '\n\n' +
      this.mainExportStatementsTemplate()
    );
  };

  private fileHeaderTemplate = (): string => {
    return (
      '/* eslint-disable */\n' +
      '/* tslint:disable */\n' +
      '\n' +
      '//////////////////////////////////////////////////////////////////////////////\n' +
      '/// Autogenerated by tailwindcss-classnames CLI. https://git.io/JtsPU\n' +
      '/// DO NOT EDIT THIS FILE DIRECTLY!\n' +
      '//////////////////////////////////////////////////////////////////////////////\n'
    );
  };

  private importStatementsTemplate = (): string => {
    return "import classnamesLib from 'clsx';" + '\n' + `T_CUSTOM_CLASSES_IMPORT_STATEMENT`;
  };

  private allClassnamesTypesTemplate = (): string => {
    const regularClassnames = this._generatedClassNames.regularClassnames;
    const pseudoClassnames = this._generatedClassNames.pseudoClassnames;

    const regularClassnamesTemplate = Object.keys(regularClassnames)
      .map(classGroup => {
        return this.generateTypesGroupTemplate(
          regularClassnames[classGroup as keyof TAllClassnames] as TAllClassnames,
          classGroup,
        );
      })
      .join('\n');

    const pseudoClassnamesTemplate = this.generateTypesTemplate({
      typeName: 'PseudoClasses',
      items: pseudoClassnames,
    });

    const allclassnamesExportTemplate = this.generateTypesTemplate({
      typeName: 'Classes',
      items: Object.keys(regularClassnames)
        .concat('PseudoClasses')
        .map(x => 'T' + x),
    }).replace(/'/g, ''); // TODO: REFACTOR this to use generateTypesGroupTemplate.

    return (
      regularClassnamesTemplate +
      '\n\n' +
      pseudoClassnamesTemplate +
      '\n\n' +
      allclassnamesExportTemplate
    );
  };

  private mainExportStatementsTemplate = (): string => {
    return (
      'export type TTailwindString = "TAILWIND_STRING"\n' +
      '\n' +
      'export type TKey = TClasses | TTailwindStringIMPORTED_T_CUSTOM_CLASSES_KEY\n' +
      '\n' +
      'export type TArg =\n' +
      '| TClasses\n' +
      '| null\n' +
      '| undefined\n' +
      '| {[key in TKey]?: boolean}\n' +
      '| TTailwindString\nIMPORTED_T_CUSTOM_CLASSES_ARG' +
      '\n' +
      'export type TTailwind = (...args: TArg[]) => TTailwindString\n' +
      '\n' +
      'export const classnames: TTailwind = classnamesLib as any\n\n' +
      'export const tw = classnames\n\n' +
      'export default tw\n\n'
    );
  };

  /**
   * Generates types group template for a utility classes group object.
   *
   *
   * ### example:
   *
   * A utility group object as:
   *
   * ```js
   * const FlexBox = {
   *   alignSelf: ['self-auto', 'self-start', 'self-center'],
   *   flexWrap: ['flex-nowrap', 'flex-wrap'],
   * }
   *```
   *
   * will produce a template which looks like this:
   *
   * ```ts
   * export type TFlexWrap =
   * | 'flex-nowrap'
   * | 'flex-wrap';
   *
   * export type TAlignSelf =
   * | 'self-auto'
   * | 'self-start'
   * | 'self-center';
   *
   * export type TFlexBox = TFlexWrap | TAlignSelf;
   * ```
   */
  private generateTypesGroupTemplate = (group: TAllClassnames, groupName: string): string => {
    const members = Object.keys(group);

    const generateMembersStatements = (): string[] => {
      return members.map(member => {
        return this.generateTypesTemplate({
          typeName: member,
          items: group[member as keyof TAllClassnames] as string[],
          prefix: this._configPrefix,
        });
      });
    };

    const generateGroupStatement = (): string => {
      const getMembersStatementsReferences = (): string =>
        members.map(member => 'T' + _.upperFirst(member)).join('\n  | ');

      return (
        `export type T${_.upperFirst(groupName)} =` +
        '\n  | ' +
        getMembersStatementsReferences() +
        '\n'
      );
    };

    return generateMembersStatements().join('\n\n') + '\n\n' + generateGroupStatement();
  };

  /**
   * Generates TS types template from a list of strings.
   *
   * #### Example:
   *
   * Given typeName: 'baz' and items:
   * ```js
   * ['foo', 'bar']
   * ```
   *
   * generates:
   *
   * ```
   * export type TBaz
   *   | foo
   *   | bar;
   * ```
   *
   * @param typeName The name of the type (without T prefix).
   * @param items The list of the strings of items to add to the type name.
   * @param prefix The prefix to add to the beginning of each item of the string array.
   */
  private generateTypesTemplate = (
    // prettier-ignore
    {typeName, items, prefix}: {typeName: string; items: string[]; prefix?: string},
  ): string => {
    return (
      `export type T${_.upperFirst(typeName)} =` +
      '\n  | ' +
      items
        .flatMap(item => {
          const classnamesThatShouldKeepTheDefaultSuffix = ['cursor'];

          return classnamesThatShouldKeepTheDefaultSuffix.map(x => {
            const shouldKeepDefaultSuffix: boolean = item.includes(x);
            const name = shouldKeepDefaultSuffix ? item : item.replace('-DEFAULT', '');

            return prefix ? `'${prefix}${name}'` : `'${name}'`;
          });
        })
        .join('\n  | ')
    );
  };
}
