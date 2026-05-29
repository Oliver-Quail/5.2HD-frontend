import type {userDetails} from "@/types/userDetails";



interface comment {
		id: number;
		created_at: string;
		updated_at: string;
		text: string;
		artefact_id: number;
		user_id: number;
		user: userDetails;
}

export type {comment};