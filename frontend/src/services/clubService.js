import { db } from '../firebase/firebase';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';

const COLLECTION_NAME = 'clubs';

export const getClubs = async () => {
    try {
        const clubsCol = collection(db, COLLECTION_NAME);
        const clubSnapshot = await getDocs(clubsCol);
        const clubList = clubSnapshot.docs.map(doc => {
            const data = doc.data();
            return {
                id: doc.id,
                ...data,
                // Map Firestore fields to Component expected props if they differ
                domain: data.category || 'General',
                members: data.membersCount || 0,
                eventsHosted: data.eventsCount || 0,
                // Defaults for fields that might be missing in Firestore but used in UI
                tagline: data.tagline || 'Community & Growth',
                description: data.description || 'Join us to explore, learn, and grow together.',
                vision: data.vision || 'Empowering students.',
                founded: data.founded || 2024,
                team: data.team || []
            };
        });
        return clubList;
    } catch (error) {
        console.error("Error fetching clubs:", error);
        return [];
    }
};

export const getClubById = async (id) => {
    console.log("[clubService] getClubById called with id:", id);
    try {
        console.log("[clubService] Creating doc reference for collection:", COLLECTION_NAME);
        const clubDocRef = doc(db, COLLECTION_NAME, id);
        console.log("[clubService] Calling getDoc...");
        const clubSnap = await getDoc(clubDocRef);
        console.log("[clubService] getDoc completed. exists:", clubSnap.exists());

        if (clubSnap.exists()) {
            const data = clubSnap.data();
            console.log("[clubService] Raw Firestore data:", data);
            const mappedData = {
                id: clubSnap.id,
                ...data,
                domain: data.category || 'General',
                members: data.membersCount || 0,
                eventsHosted: data.eventsCount || 0,
                tagline: data.tagline || 'Community & Growth',
                description: data.description || 'Join us to explore, learn, and grow together.',
                vision: data.vision || 'Empowering students.',
                founded: data.founded || 2024,
                team: data.team || []
            };
            console.log("[clubService] Mapped data:", mappedData);
            return mappedData;
        } else {
            console.error("[clubService] No such club document exists!");
            return null;
        }
    } catch (error) {
        console.error("[clubService] Error fetching club details:", error);
        console.error("[clubService] Error details:", error.message, error.code);
        return null;
    }
};
