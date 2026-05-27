import type {artistDetails} from "@/types/artistDetails";


interface artefact {
    	id: number;
		created_at: string;
		updated_at: string;
		name: string;
		picture: string;
		description: string;
		artist_id: number;
		artist :artistDetails;
}

export type {artefact};