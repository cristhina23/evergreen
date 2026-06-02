import {
	ArrowRight,
	CalendarCheck,
	Camera,
	I
	Check,
	ChevronDown,
	Clock,
	Leaf,
	Mail,
	MapPin,
	Menu,
	MessageCircle,
	Music2,
	PackageCheck,
	Phone,
	Play,
	Plus,
	Recycle,
	ShieldCheck,
	Sparkles,
	Star,
	Truck,
	Users,
	WashingMachine,
	X,
	Video
} from 'lucide-svelte';

const icons = {
	ArrowRight,
	CalendarCheck,
	Camera,
	Check,
	ChevronDown,
	Clock,
	Instagram,
	Leaf,
	Mail,
	MapPin,
	Menu,
	MessageCircle,
	Music2,
	PackageCheck,
	Phone,
	Play,
	Plus,
	Recycle,
	ShieldCheck,
	Sparkles,
	Star,
	Truck,
	Users,
	WashingMachine,
	X,
	Video
};

export function getIcon(name) {
	return icons[name] ?? Leaf;
}
