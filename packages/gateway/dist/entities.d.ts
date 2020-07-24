import * as t from 'io-ts';
export declare const optional: (type: t.Mixed) => t.UnionC<[t.Mixed, t.UndefinedC, t.NullC]>;
export declare const ResponseCodec: <T extends t.Mixed>(data: T) => t.TypeC<{
    status: t.UnionC<[t.LiteralC<"ok">, t.LiteralC<"ng">]>;
    data: T;
}>;
export declare const LiverCodec: t.TypeC<{
    id: t.NumberC;
    name: t.StringC;
    avatar: t.StringC;
    color: t.StringC;
    fullbody: t.UnionC<[t.Mixed, t.UndefinedC, t.NullC]>;
    english_name: t.UnionC<[t.Mixed, t.UndefinedC, t.NullC]>;
    furigana: t.UnionC<[t.Mixed, t.UndefinedC, t.NullC]>;
    description: t.UnionC<[t.Mixed, t.UndefinedC, t.NullC]>;
    public: t.UnionC<[t.Mixed, t.UndefinedC, t.NullC]>;
    position: t.UnionC<[t.Mixed, t.UndefinedC, t.NullC]>;
}>;
export declare type Liver = t.TypeOf<typeof LiverCodec>;
export declare const LiverTwitterAccountCodec: t.TypeC<{
    id: t.NumberC;
    liver_id: t.NumberC;
    screen_name: t.StringC;
}>;
export declare type LiverTwitterAccount = t.TypeOf<typeof LiverTwitterAccountCodec>;
export declare const LiverYoutubeChannelCodec: t.TypeC<{
    id: t.NumberC;
    liver_id: t.NumberC;
    channel: t.StringC;
    channel_name: t.StringC;
    creation_order: t.NumberC;
}>;
export declare type LiverYoutubeChannel = t.TypeOf<typeof LiverYoutubeChannelCodec>;
export declare const LiverRelationshipCodec: t.TypeC<{
    liver: t.TypeC<{
        id: t.NumberC;
        name: t.StringC;
        avatar: t.StringC;
        color: t.StringC;
        fullbody: t.UnionC<[t.Mixed, t.UndefinedC, t.NullC]>;
        english_name: t.UnionC<[t.Mixed, t.UndefinedC, t.NullC]>;
        furigana: t.UnionC<[t.Mixed, t.UndefinedC, t.NullC]>;
        description: t.UnionC<[t.Mixed, t.UndefinedC, t.NullC]>;
        public: t.UnionC<[t.Mixed, t.UndefinedC, t.NullC]>;
        position: t.UnionC<[t.Mixed, t.UndefinedC, t.NullC]>;
    }>;
    liver_twitter_account: t.TypeC<{
        id: t.NumberC;
        liver_id: t.NumberC;
        screen_name: t.StringC;
    }>;
    liver_youtube_channel: t.UnionC<[t.TypeC<{
        id: t.NumberC;
        liver_id: t.NumberC;
        channel: t.StringC;
        channel_name: t.StringC;
        creation_order: t.NumberC;
    }>, t.ArrayC<t.TypeC<{
        id: t.NumberC;
        liver_id: t.NumberC;
        channel: t.StringC;
        channel_name: t.StringC;
        creation_order: t.NumberC;
    }>>]>;
    liver_platform: t.UnionC<[t.Mixed, t.UndefinedC, t.NullC]>;
    user_liver: t.UnionC<[t.Mixed, t.UndefinedC, t.NullC]>;
}>;
export declare type LiverRelationship = t.TypeOf<typeof LiverRelationshipCodec>;
export declare const GenreCodec: t.TypeC<{
    id: t.NumberC;
    name: t.StringC;
}>;
export declare type Genre = t.TypeOf<typeof GenreCodec>;
export declare const EventCodec: t.TypeC<{
    id: t.NumberC;
    name: t.StringC;
    description: t.StringC;
    public: t.NumberC;
    url: t.StringC;
    thumbnail: t.StringC;
    start_date: t.StringC;
    end_date: t.StringC;
    recommend: t.BooleanC;
    genre: t.UnionC<[t.Mixed, t.UndefinedC, t.NullC]>;
    livers: t.ArrayC<t.TypeC<{
        id: t.NumberC;
        name: t.StringC;
        avatar: t.StringC;
        color: t.StringC;
        fullbody: t.UnionC<[t.Mixed, t.UndefinedC, t.NullC]>;
        english_name: t.UnionC<[t.Mixed, t.UndefinedC, t.NullC]>;
        furigana: t.UnionC<[t.Mixed, t.UndefinedC, t.NullC]>;
        description: t.UnionC<[t.Mixed, t.UndefinedC, t.NullC]>;
        public: t.UnionC<[t.Mixed, t.UndefinedC, t.NullC]>;
        position: t.UnionC<[t.Mixed, t.UndefinedC, t.NullC]>;
    }>>;
}>;
export declare type Event = t.TypeOf<typeof EventCodec>;
export declare const EventsResponseCodec: t.TypeC<{
    status: t.UnionC<[t.LiteralC<"ok">, t.LiteralC<"ng">]>;
    data: t.TypeC<{
        events: t.ArrayC<t.TypeC<{
            id: t.NumberC;
            name: t.StringC;
            description: t.StringC;
            public: t.NumberC;
            url: t.StringC;
            thumbnail: t.StringC;
            start_date: t.StringC;
            end_date: t.StringC;
            recommend: t.BooleanC;
            genre: t.UnionC<[t.Mixed, t.UndefinedC, t.NullC]>;
            livers: t.ArrayC<t.TypeC<{
                id: t.NumberC;
                name: t.StringC;
                avatar: t.StringC;
                color: t.StringC;
                fullbody: t.UnionC<[t.Mixed, t.UndefinedC, t.NullC]>;
                english_name: t.UnionC<[t.Mixed, t.UndefinedC, t.NullC]>;
                furigana: t.UnionC<[t.Mixed, t.UndefinedC, t.NullC]>;
                description: t.UnionC<[t.Mixed, t.UndefinedC, t.NullC]>;
                public: t.UnionC<[t.Mixed, t.UndefinedC, t.NullC]>;
                position: t.UnionC<[t.Mixed, t.UndefinedC, t.NullC]>;
            }>>;
        }>>;
    }>;
}>;
export declare type EventsResponse = t.TypeOf<typeof EventsResponseCodec>;
export declare const EventResponseCodec: t.TypeC<{
    status: t.UnionC<[t.LiteralC<"ok">, t.LiteralC<"ng">]>;
    data: t.TypeC<{
        event: t.TypeC<{
            id: t.NumberC;
            name: t.StringC;
            description: t.StringC;
            public: t.NumberC;
            url: t.StringC;
            thumbnail: t.StringC;
            start_date: t.StringC;
            end_date: t.StringC;
            recommend: t.BooleanC;
            genre: t.UnionC<[t.Mixed, t.UndefinedC, t.NullC]>;
            livers: t.ArrayC<t.TypeC<{
                id: t.NumberC;
                name: t.StringC;
                avatar: t.StringC;
                color: t.StringC;
                fullbody: t.UnionC<[t.Mixed, t.UndefinedC, t.NullC]>;
                english_name: t.UnionC<[t.Mixed, t.UndefinedC, t.NullC]>;
                furigana: t.UnionC<[t.Mixed, t.UndefinedC, t.NullC]>;
                description: t.UnionC<[t.Mixed, t.UndefinedC, t.NullC]>;
                public: t.UnionC<[t.Mixed, t.UndefinedC, t.NullC]>;
                position: t.UnionC<[t.Mixed, t.UndefinedC, t.NullC]>;
            }>>;
        }>;
    }>;
}>;
export declare type EventResponse = t.TypeOf<typeof EventResponseCodec>;
export declare const LiversResponseCodec: t.TypeC<{
    status: t.UnionC<[t.LiteralC<"ok">, t.LiteralC<"ng">]>;
    data: t.TypeC<{
        liver_relationships: t.ArrayC<t.TypeC<{
            liver: t.TypeC<{
                id: t.NumberC;
                name: t.StringC;
                avatar: t.StringC;
                color: t.StringC;
                fullbody: t.UnionC<[t.Mixed, t.UndefinedC, t.NullC]>;
                english_name: t.UnionC<[t.Mixed, t.UndefinedC, t.NullC]>;
                furigana: t.UnionC<[t.Mixed, t.UndefinedC, t.NullC]>;
                description: t.UnionC<[t.Mixed, t.UndefinedC, t.NullC]>;
                public: t.UnionC<[t.Mixed, t.UndefinedC, t.NullC]>;
                position: t.UnionC<[t.Mixed, t.UndefinedC, t.NullC]>;
            }>;
            liver_twitter_account: t.TypeC<{
                id: t.NumberC;
                liver_id: t.NumberC;
                screen_name: t.StringC;
            }>;
            liver_youtube_channel: t.UnionC<[t.TypeC<{
                id: t.NumberC;
                liver_id: t.NumberC;
                channel: t.StringC;
                channel_name: t.StringC;
                creation_order: t.NumberC;
            }>, t.ArrayC<t.TypeC<{
                id: t.NumberC;
                liver_id: t.NumberC;
                channel: t.StringC;
                channel_name: t.StringC;
                creation_order: t.NumberC;
            }>>]>;
            liver_platform: t.UnionC<[t.Mixed, t.UndefinedC, t.NullC]>;
            user_liver: t.UnionC<[t.Mixed, t.UndefinedC, t.NullC]>;
        }>>;
    }>;
}>;
export declare type LiversResponse = t.TypeOf<typeof LiversResponseCodec>;
export declare const LiverResponseCodec: t.TypeC<{
    status: t.UnionC<[t.LiteralC<"ok">, t.LiteralC<"ng">]>;
    data: t.TypeC<{
        liver: t.TypeC<{
            id: t.NumberC;
            name: t.StringC;
            avatar: t.StringC;
            color: t.StringC;
            fullbody: t.UnionC<[t.Mixed, t.UndefinedC, t.NullC]>;
            english_name: t.UnionC<[t.Mixed, t.UndefinedC, t.NullC]>;
            furigana: t.UnionC<[t.Mixed, t.UndefinedC, t.NullC]>;
            description: t.UnionC<[t.Mixed, t.UndefinedC, t.NullC]>;
            public: t.UnionC<[t.Mixed, t.UndefinedC, t.NullC]>;
            position: t.UnionC<[t.Mixed, t.UndefinedC, t.NullC]>;
        }>;
        liver_twitter_account: t.TypeC<{
            id: t.NumberC;
            liver_id: t.NumberC;
            screen_name: t.StringC;
        }>;
        liver_youtube_channel: t.UnionC<[t.TypeC<{
            id: t.NumberC;
            liver_id: t.NumberC;
            channel: t.StringC;
            channel_name: t.StringC;
            creation_order: t.NumberC;
        }>, t.ArrayC<t.TypeC<{
            id: t.NumberC;
            liver_id: t.NumberC;
            channel: t.StringC;
            channel_name: t.StringC;
            creation_order: t.NumberC;
        }>>]>;
        liver_platform: t.UnionC<[t.Mixed, t.UndefinedC, t.NullC]>;
        user_liver: t.UnionC<[t.Mixed, t.UndefinedC, t.NullC]>;
    }>;
}>;
export declare type LiverResponse = t.TypeOf<typeof LiverResponseCodec>;
export declare const GenresResponseCodec: t.TypeC<{
    status: t.UnionC<[t.LiteralC<"ok">, t.LiteralC<"ng">]>;
    data: t.TypeC<{
        genres: t.ArrayC<t.TypeC<{
            id: t.NumberC;
            name: t.StringC;
        }>>;
    }>;
}>;
export declare type GenresResponse = t.TypeOf<typeof GenresResponseCodec>;
