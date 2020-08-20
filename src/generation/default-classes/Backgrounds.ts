const backgroundAttachment = ['bg-fixed', 'bg-local', 'bg-scroll'];

const backgroundClip = ['bg-clip-border', 'bg-clip-padding', 'bg-clip-content', 'bg-clip-text'];

const backgroundColor = [
  'bg-transparent',
  'bg-black',
  'bg-white',
  'bg-gray-100',
  'bg-gray-200',
  'bg-gray-300',
  'bg-gray-400',
  'bg-gray-500',
  'bg-gray-600',
  'bg-gray-700',
  'bg-gray-800',
  'bg-gray-900',
  'bg-red-100',
  'bg-red-200',
  'bg-red-300',
  'bg-red-400',
  'bg-red-500',
  'bg-red-600',
  'bg-red-700',
  'bg-red-800',
  'bg-red-900',
  'bg-orange-100',
  'bg-orange-200',
  'bg-orange-300',
  'bg-orange-400',
  'bg-orange-500',
  'bg-orange-600',
  'bg-orange-700',
  'bg-orange-800',
  'bg-orange-900',
  'bg-yellow-100',
  'bg-yellow-200',
  'bg-yellow-300',
  'bg-yellow-400',
  'bg-yellow-500',
  'bg-yellow-600',
  'bg-yellow-700',
  'bg-yellow-800',
  'bg-yellow-900',
  'bg-green-100',
  'bg-green-200',
  'bg-green-300',
  'bg-green-400',
  'bg-green-500',
  'bg-green-600',
  'bg-green-700',
  'bg-green-800',
  'bg-green-900',
  'bg-teal-100',
  'bg-teal-200',
  'bg-teal-300',
  'bg-teal-400',
  'bg-teal-500',
  'bg-teal-600',
  'bg-teal-700',
  'bg-teal-800',
  'bg-teal-900',
  'bg-blue-100',
  'bg-blue-200',
  'bg-blue-300',
  'bg-blue-400',
  'bg-blue-500',
  'bg-blue-600',
  'bg-blue-700',
  'bg-blue-800',
  'bg-blue-900',
  'bg-indigo-100',
  'bg-indigo-200',
  'bg-indigo-300',
  'bg-indigo-400',
  'bg-indigo-500',
  'bg-indigo-600',
  'bg-indigo-700',
  'bg-indigo-800',
  'bg-indigo-900',
  'bg-purple-100',
  'bg-purple-200',
  'bg-purple-300',
  'bg-purple-400',
  'bg-purple-500',
  'bg-purple-600',
  'bg-purple-700',
  'bg-purple-800',
  'bg-purple-900',
  'bg-pink-100',
  'bg-pink-200',
  'bg-pink-300',
  'bg-pink-400',
  'bg-pink-500',
  'bg-pink-600',
  'bg-pink-700',
  'bg-pink-800',
  'bg-pink-900',
];

const backgroundOpacity = [
  'bg-opacity-0',
  'bg-opacity-25',
  'bg-opacity-50',
  'bg-opacity-75',
  'bg-opacity-100',
];

const backgroundPosition = [
  'bg-bottom',
  'bg-center',
  'bg-left',
  'bg-left-bottom',
  'bg-left-top',
  'bg-right',
  'bg-right-bottom',
  'bg-right-top',
  'bg-top',
];

const backgroundRepeat = [
  'bg-repeat',
  'bg-no-repeat',
  'bg-repeat-x',
  'bg-repeat-y',
  'bg-repeat-round',
  'bg-repeat-space',
];

const backgroundSize = ['bg-auto', 'bg-cover', 'bg-contain'];

const backgroundImage = [
  'bg-none',
  'bg-gradient-to-t',
  'bg-gradient-to-tr',
  'bg-gradient-to-r',
  'bg-gradient-to-br',
  'bg-gradient-to-b',
  'bg-gradient-to-bl',
  'bg-gradient-to-l',
  'bg-gradient-to-tl',
];

const gradientColorStops = [
  'from-transparent',
  'via-transparent',
  'to-transparent',
  'from-current',
  'via-current',
  'to-current',
  'from-black',
  'via-black',
  'to-black',
  'from-white',
  'via-white',
  'to-white',
  'from-gray-100',
  'via-gray-100',
  'to-gray-100',
  'from-gray-200',
  'via-gray-200',
  'to-gray-200',
  'from-gray-300',
  'via-gray-300',
  'to-gray-300',
  'from-gray-400',
  'via-gray-400',
  'to-gray-400',
  'from-gray-500',
  'via-gray-500',
  'to-gray-500',
  'from-gray-600',
  'via-gray-600',
  'to-gray-600',
  'from-gray-700',
  'via-gray-700',
  'to-gray-700',
  'from-gray-800',
  'via-gray-800',
  'to-gray-800',
  'from-gray-900',
  'via-gray-900',
  'to-gray-900',
  'from-red-100',
  'via-red-100',
  'to-red-100',
  'from-red-200',
  'via-red-200',
  'to-red-200',
  'from-red-300',
  'via-red-300',
  'to-red-300',
  'from-red-400',
  'via-red-400',
  'to-red-400',
  'from-red-500',
  'via-red-500',
  'to-red-500',
  'from-red-600',
  'via-red-600',
  'to-red-600',
  'from-red-700',
  'via-red-700',
  'to-red-700',
  'from-red-800',
  'via-red-800',
  'to-red-800',
  'from-red-900',
  'via-red-900',
  'to-red-900',
  'from-orange-100',
  'via-orange-100',
  'to-orange-100',
  'from-orange-200',
  'via-orange-200',
  'to-orange-200',
  'from-orange-300',
  'via-orange-300',
  'to-orange-300',
  'from-orange-400',
  'via-orange-400',
  'to-orange-400',
  'from-orange-500',
  'via-orange-500',
  'to-orange-500',
  'from-orange-600',
  'via-orange-600',
  'to-orange-600',
  'from-orange-700',
  'via-orange-700',
  'to-orange-700',
  'from-orange-800',
  'via-orange-800',
  'to-orange-800',
  'from-orange-900',
  'via-orange-900',
  'to-orange-900',
  'from-yellow-100',
  'via-yellow-100',
  'to-yellow-100',
  'from-yellow-200',
  'via-yellow-200',
  'to-yellow-200',
  'from-yellow-300',
  'via-yellow-300',
  'to-yellow-300',
  'from-yellow-400',
  'via-yellow-400',
  'to-yellow-400',
  'from-yellow-500',
  'via-yellow-500',
  'to-yellow-500',
  'from-yellow-600',
  'via-yellow-600',
  'to-yellow-600',
  'from-yellow-700',
  'via-yellow-700',
  'to-yellow-700',
  'from-yellow-800',
  'via-yellow-800',
  'to-yellow-800',
  'from-yellow-900',
  'via-yellow-900',
  'to-yellow-900',
  'from-green-100',
  'via-green-100',
  'to-green-100',
  'from-green-200',
  'via-green-200',
  'to-green-200',
  'from-green-300',
  'via-green-300',
  'to-green-300',
  'from-green-400',
  'via-green-400',
  'to-green-400',
  'from-green-500',
  'via-green-500',
  'to-green-500',
  'from-green-600',
  'via-green-600',
  'to-green-600',
  'from-green-700',
  'via-green-700',
  'to-green-700',
  'from-green-800',
  'via-green-800',
  'to-green-800',
  'from-green-900',
  'via-green-900',
  'to-green-900',
  'from-teal-100',
  'via-teal-100',
  'to-teal-100',
  'from-teal-200',
  'via-teal-200',
  'to-teal-200',
  'from-teal-300',
  'via-teal-300',
  'to-teal-300',
  'from-teal-400',
  'via-teal-400',
  'to-teal-400',
  'from-teal-500',
  'via-teal-500',
  'to-teal-500',
  'from-teal-600',
  'via-teal-600',
  'to-teal-600',
  'from-teal-700',
  'via-teal-700',
  'to-teal-700',
  'from-teal-800',
  'via-teal-800',
  'to-teal-800',
  'from-teal-900',
  'via-teal-900',
  'to-teal-900',
  'from-blue-100',
  'via-blue-100',
  'to-blue-100',
  'from-blue-200',
  'via-blue-200',
  'to-blue-200',
  'from-blue-300',
  'via-blue-300',
  'to-blue-300',
  'from-blue-400',
  'via-blue-400',
  'to-blue-400',
  'from-blue-500',
  'via-blue-500',
  'to-blue-500',
  'from-blue-600',
  'via-blue-600',
  'to-blue-600',
  'from-blue-700',
  'via-blue-700',
  'to-blue-700',
  'from-blue-800',
  'via-blue-800',
  'to-blue-800',
  'from-blue-900',
  'via-blue-900',
  'to-blue-900',
  'from-indigo-100',
  'via-indigo-100',
  'to-indigo-100',
  'from-indigo-200',
  'via-indigo-200',
  'to-indigo-200',
  'from-indigo-300',
  'via-indigo-300',
  'to-indigo-300',
  'from-indigo-400',
  'via-indigo-400',
  'to-indigo-400',
  'from-indigo-500',
  'via-indigo-500',
  'to-indigo-500',
  'from-indigo-600',
  'via-indigo-600',
  'to-indigo-600',
  'from-indigo-700',
  'via-indigo-700',
  'to-indigo-700',
  'from-indigo-800',
  'via-indigo-800',
  'to-indigo-800',
  'from-indigo-900',
  'via-indigo-900',
  'to-indigo-900',
  'from-purple-100',
  'via-purple-100',
  'to-purple-100',
  'from-purple-200',
  'via-purple-200',
  'to-purple-200',
  'from-purple-300',
  'via-purple-300',
  'to-purple-300',
  'from-purple-400',
  'via-purple-400',
  'to-purple-400',
  'from-purple-500',
  'via-purple-500',
  'to-purple-500',
  'from-purple-600',
  'via-purple-600',
  'to-purple-600',
  'from-purple-700',
  'via-purple-700',
  'to-purple-700',
  'from-purple-800',
  'via-purple-800',
  'to-purple-800',
  'from-purple-900',
  'via-purple-900',
  'to-purple-900',
  'from-pink-100',
  'via-pink-100',
  'to-pink-100',
  'from-pink-200',
  'via-pink-200',
  'to-pink-200',
  'from-pink-300',
  'via-pink-300',
  'to-pink-300',
  'from-pink-400',
  'via-pink-400',
  'to-pink-400',
  'from-pink-500',
  'via-pink-500',
  'to-pink-500',
  'from-pink-600',
  'via-pink-600',
  'to-pink-600',
  'from-pink-700',
  'via-pink-700',
  'to-pink-700',
  'from-pink-800',
  'via-pink-800',
  'to-pink-800',
  'from-pink-900',
  'via-pink-900',
  'to-pink-900',
];

export const Backgrounds = {
  backgroundAttachment,
  backgroundClip,
  backgroundColor,
  backgroundOpacity,
  backgroundPosition,
  backgroundRepeat,
  backgroundSize,
  backgroundImage,
  gradientColorStops,
};
