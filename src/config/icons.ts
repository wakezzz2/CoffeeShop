import { IconType } from 'react-icons';
import { 
  FaCoffee, FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaHeart, 
  FaComment, FaShare, FaSearch, FaTimes, FaArrowLeft, FaArrowRight, 
  FaDownload, FaExpand, FaInfoCircle, FaEnvelope, FaPhone, FaMapMarkerAlt,
  FaClock, FaGift, FaStar, FaPercent, FaArrowUp, FaArrowDown, FaBars,
  FaTimesCircle, FaCheckCircle, FaExclamationCircle, FaShoppingCart,
  FaUser, FaSignInAlt, FaSignOutAlt, FaCog, FaBell, FaQuestionCircle,
  FaUtensils, FaImage, FaHome, FaBook, FaCalendar, FaLocationArrow,
  FaChevronDown, FaChevronUp, FaChevronLeft, FaChevronRight
} from 'react-icons/fa';

interface IconConfig {
  [key: string]: IconType;
}

export const icons: IconConfig = {
  // Social Media
  instagram: FaInstagram,
  facebook: FaFacebook,
  twitter: FaTwitter,
  youtube: FaYoutube,

  // Navigation
  menu: FaBars,
  close: FaTimes,
  arrowLeft: FaArrowLeft,
  arrowRight: FaArrowRight,
  arrowUp: FaArrowUp,
  arrowDown: FaArrowDown,
  chevronDown: FaChevronDown,
  chevronUp: FaChevronUp,
  chevronLeft: FaChevronLeft,
  chevronRight: FaChevronRight,
  home: FaHome,

  // Actions
  heart: FaHeart,
  comment: FaComment,
  share: FaShare,
  search: FaSearch,
  download: FaDownload,
  expand: FaExpand,
  info: FaInfoCircle,
  cart: FaShoppingCart,
  user: FaUser,
  settings: FaCog,
  bell: FaBell,
  help: FaQuestionCircle,
  utensils: FaUtensils,
  image: FaImage,
  book: FaBook,

  // Authentication
  signIn: FaSignInAlt,
  signOut: FaSignOutAlt,

  // Status
  success: FaCheckCircle,
  error: FaTimesCircle,
  warning: FaExclamationCircle,

  // Business
  coffee: FaCoffee,
  clock: FaClock,
  gift: FaGift,
  star: FaStar,
  percent: FaPercent,
  envelope: FaEnvelope,
  phone: FaPhone,
  location: FaMapMarkerAlt,
  calendar: FaCalendar,
  locationArrow: FaLocationArrow,
};

export const getIcon = (name: string): IconType => {
  return icons[name] || FaQuestionCircle;
}; 