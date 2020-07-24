"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenresResponseCodec = exports.LiverResponseCodec = exports.LiversResponseCodec = exports.EventResponseCodec = exports.EventsResponseCodec = exports.EventCodec = exports.GenreCodec = exports.LiverRelationshipCodec = exports.LiverYoutubeChannelCodec = exports.LiverTwitterAccountCodec = exports.LiverCodec = exports.ResponseCodec = exports.optional = void 0;
const t = __importStar(require("io-ts"));
exports.optional = (type) => t.union([type, t.undefined, t.null]);
exports.ResponseCodec = (data) => t.type({
    status: t.union([t.literal('ok'), t.literal('ng')]),
    data: data,
});
exports.LiverCodec = t.type({
    id: t.number,
    name: t.string,
    avatar: t.string,
    color: t.string,
    fullbody: exports.optional(t.string),
    english_name: exports.optional(t.string),
    furigana: exports.optional(t.string),
    description: exports.optional(t.string),
    public: exports.optional(t.number),
    position: exports.optional(t.number),
});
exports.LiverTwitterAccountCodec = t.type({
    id: t.number,
    liver_id: t.number,
    screen_name: t.string,
});
exports.LiverYoutubeChannelCodec = t.type({
    id: t.number,
    liver_id: t.number,
    channel: t.string,
    channel_name: t.string,
    creation_order: t.number,
});
exports.LiverRelationshipCodec = t.type({
    liver: exports.LiverCodec,
    liver_twitter_account: exports.LiverTwitterAccountCodec,
    liver_youtube_channel: t.union([
        exports.LiverYoutubeChannelCodec,
        t.array(exports.LiverYoutubeChannelCodec),
    ]),
    liver_platform: exports.optional(t.array(t.undefined)),
    user_liver: exports.optional(t.null),
});
exports.GenreCodec = t.type({
    id: t.number,
    name: t.string,
});
exports.EventCodec = t.type({
    id: t.number,
    name: t.string,
    description: t.string,
    public: t.number,
    url: t.string,
    thumbnail: t.string,
    start_date: t.string,
    end_date: t.string,
    recommend: t.boolean,
    genre: exports.optional(exports.GenreCodec),
    livers: t.array(exports.LiverCodec),
});
exports.EventsResponseCodec = exports.ResponseCodec(t.type({ events: t.array(exports.EventCodec) }));
exports.EventResponseCodec = exports.ResponseCodec(t.type({ event: exports.EventCodec }));
exports.LiversResponseCodec = exports.ResponseCodec(t.type({
    liver_relationships: t.array(exports.LiverRelationshipCodec),
}));
exports.LiverResponseCodec = exports.ResponseCodec(exports.LiverRelationshipCodec);
exports.GenresResponseCodec = exports.ResponseCodec(t.type({ genres: t.array(exports.GenreCodec) }));
//# sourceMappingURL=entities.js.map