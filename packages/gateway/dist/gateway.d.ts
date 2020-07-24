export declare class Gateway {
    readonly url: string;
    constructor(url: string);
    private get;
    fetchEvents: () => Promise<{
        status: "ok" | "ng";
        data: {
            events: {
                id: number;
                name: string;
                description: string;
                public: number;
                url: string;
                thumbnail: string;
                start_date: string;
                end_date: string;
                recommend: boolean;
                genre: any;
                livers: {
                    id: number;
                    name: string;
                    avatar: string;
                    color: string;
                    fullbody: any;
                    english_name: any;
                    furigana: any;
                    description: any;
                    public: any;
                    position: any;
                }[];
            }[];
        };
    }>;
    fetchEvent: (id: number) => Promise<{
        status: "ok" | "ng";
        data: {
            event: {
                id: number;
                name: string;
                description: string;
                public: number;
                url: string;
                thumbnail: string;
                start_date: string;
                end_date: string;
                recommend: boolean;
                genre: any;
                livers: {
                    id: number;
                    name: string;
                    avatar: string;
                    color: string;
                    fullbody: any;
                    english_name: any;
                    furigana: any;
                    description: any;
                    public: any;
                    position: any;
                }[];
            };
        };
    }>;
    fetchGenres: () => Promise<{
        status: "ok" | "ng";
        data: {
            genres: {
                id: number;
                name: string;
            }[];
        };
    }>;
    fetchLivers: () => Promise<{
        status: "ok" | "ng";
        data: {
            liver_relationships: {
                liver: {
                    id: number;
                    name: string;
                    avatar: string;
                    color: string;
                    fullbody: any;
                    english_name: any;
                    furigana: any;
                    description: any;
                    public: any;
                    position: any;
                };
                liver_twitter_account: {
                    id: number;
                    liver_id: number;
                    screen_name: string;
                };
                liver_youtube_channel: {
                    id: number;
                    liver_id: number;
                    channel: string;
                    channel_name: string;
                    creation_order: number;
                } | {
                    id: number;
                    liver_id: number;
                    channel: string;
                    channel_name: string;
                    creation_order: number;
                }[];
                liver_platform: any;
                user_liver: any;
            }[];
        };
    }>;
    fetchLiver: (id: number) => Promise<{
        status: "ok" | "ng";
        data: {
            liver: {
                id: number;
                name: string;
                avatar: string;
                color: string;
                fullbody: any;
                english_name: any;
                furigana: any;
                description: any;
                public: any;
                position: any;
            };
            liver_twitter_account: {
                id: number;
                liver_id: number;
                screen_name: string;
            };
            liver_youtube_channel: {
                id: number;
                liver_id: number;
                channel: string;
                channel_name: string;
                creation_order: number;
            } | {
                id: number;
                liver_id: number;
                channel: string;
                channel_name: string;
                creation_order: number;
            }[];
            liver_platform: any;
            user_liver: any;
        };
    }>;
}
