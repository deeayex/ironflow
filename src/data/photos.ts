// Iron Flow photos. Images live in src/assets/photos.
// To add one: drop the file in src/assets/photos, import it here, and add it to a gallery section.
import classMeditation from '../assets/photos/class-meditation.jpg';
import classFlow from '../assets/photos/class-flow.jpg';
import classStudio from '../assets/photos/class-studio.jpg';
import seatedMeditation from '../assets/photos/seated-meditation.jpg';
import instructorMic from '../assets/photos/instructor-mic.jpg';
import studioLobby from '../assets/photos/studio-lobby.jpg';
import treePose from '../assets/photos/tree-pose.jpg';
import brandiPortrait from '../assets/photos/brandi-studio-portrait.jpg';
import brandiCrescent from '../assets/photos/brandi-crescent.jpg';
import brandiThreeLegDog from '../assets/photos/brandi-three-leg-dog.jpg';
import boatArmsUp from '../assets/photos/boat-arms-up.jpg';
import boatSunset from '../assets/photos/boat-sunset.jpg';
import boatClose from '../assets/photos/boat-close.jpg';
import railStandingSplit from '../assets/photos/rail-standing-split.jpg';
import railDancer from '../assets/photos/rail-dancer.jpg';
import railWheel from '../assets/photos/rail-wheel.jpg';
import railNamaste from '../assets/photos/rail-namaste.jpg';

export const photos = {
	classMeditation: { src: classMeditation, alt: 'Three students meditating with hands on their hearts at Iron Flow Studio' },
	classFlow: { src: classFlow, alt: 'A yoga class moving through a flow in the brick-walled Iron Flow Studio' },
	classStudio: { src: classStudio, alt: 'Students on their mats during class under the studio’s exposed wooden beams' },
	seatedMeditation: { src: seatedMeditation, alt: 'Students seated on Iron Flow mats during a quiet moment of class' },
	instructorMic: { src: instructorMic, alt: 'Brandi Kelty speaking to the group at Iron Flow Studio' },
	studioLobby: { src: studioLobby, alt: 'Brandi Kelty with a client in the Iron Flow Studio lobby under the Namaste sign' },
	treePose: { src: treePose, alt: 'Two friends laughing in tree pose in the studio' },
	brandiPortrait: { src: brandiPortrait, alt: 'Brandi Kelty in a kneeling quad stretch on her mat at Iron Flow Studio' },
	brandiCrescent: { src: brandiCrescent, alt: 'Brandi Kelty in a crescent lunge under the Namaste sign at Iron Flow Studio' },
	brandiThreeLegDog: { src: brandiThreeLegDog, alt: 'Brandi Kelty in three-legged downward dog in the studio' },
	boatArmsUp: { src: boatArmsUp, alt: 'Five women raising their arms on a pontoon boat during boat yoga on the lake' },
	boatSunset: { src: boatSunset, alt: 'Boat yoga group reaching overhead, silhouetted against the setting sun' },
	boatClose: { src: boatClose, alt: 'Smiling boat yoga students with arms raised on the back of a pontoon' },
	railStandingSplit: { src: railStandingSplit, alt: 'Brandi Kelty in a standing split on the railroad tracks at sunset' },
	railDancer: { src: railDancer, alt: 'Brandi Kelty in dancer pose on the railroad tracks' },
	railWheel: { src: railWheel, alt: 'Brandi Kelty in a backbend across the rails at sunset' },
	railNamaste: { src: railNamaste, alt: 'Brandi Kelty seated cross-legged on the tracks with hands in prayer' },
};

// Sections for the Photos & Content page
export const gallerySections = [
	{
		title: 'In The Studio',
		credit: 'Photos by Allie Gash',
		photos: [
			photos.classMeditation,
			photos.brandiPortrait,
			photos.classFlow,
			photos.instructorMic,
			photos.treePose,
			photos.brandiCrescent,
			photos.seatedMeditation,
			photos.studioLobby,
			photos.brandiThreeLegDog,
			photos.classStudio,
		],
	},
	{
		title: 'Boat Yoga On The Lake',
		credit: 'Photos by Allie Gash',
		photos: [photos.boatArmsUp, photos.boatClose, photos.boatSunset],
	},
	{
		title: 'At The Rail Yard',
		credit: 'Photos by Layni Price',
		photos: [photos.railStandingSplit, photos.railDancer, photos.railNamaste, photos.railWheel],
	},
];
