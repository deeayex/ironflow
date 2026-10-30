// Studio photos (by Allie Gash). Images live in src/assets/photos.
// To add one: drop the file in src/assets/photos, import it here, and add it to the list.
import classMeditation from '../assets/photos/class-meditation.jpg';
import classFlow from '../assets/photos/class-flow.jpg';
import classStudio from '../assets/photos/class-studio.jpg';
import seatedMeditation from '../assets/photos/seated-meditation.jpg';
import instructorMic from '../assets/photos/instructor-mic.jpg';
import studioLobby from '../assets/photos/studio-lobby.jpg';
import treePose from '../assets/photos/tree-pose.jpg';

export const photos = {
	classMeditation: { src: classMeditation, alt: 'Three students meditating with hands on their hearts at Iron Flow Studio' },
	classFlow: { src: classFlow, alt: 'A yoga class moving through a flow in the brick-walled Iron Flow Studio' },
	classStudio: { src: classStudio, alt: 'Students on their mats during class under the studio’s exposed wooden beams' },
	seatedMeditation: { src: seatedMeditation, alt: 'Students seated on Iron Flow mats during a quiet moment of class' },
	instructorMic: { src: instructorMic, alt: 'Instructor speaking to the group at Iron Flow Studio' },
	studioLobby: { src: studioLobby, alt: 'Two smiling women in the Iron Flow Studio lobby under the Namaste sign' },
	treePose: { src: treePose, alt: 'Two friends laughing in tree pose in the studio' },
};

// Order for the Photos & Content gallery
export const gallery = [
	photos.classMeditation,
	photos.instructorMic,
	photos.classFlow,
	photos.treePose,
	photos.seatedMeditation,
	photos.studioLobby,
	photos.classStudio,
];
