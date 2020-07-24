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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gateway = void 0;
const gaxios = __importStar(require("gaxios"));
const Either_1 = require("fp-ts/lib/Either");
const entities_1 = require("./entities");
class Gateway {
    constructor(url) {
        this.get = (url, params) => __awaiter(this, void 0, void 0, function* () {
            const res = yield gaxios.request({
                method: 'GET',
                url,
                params,
            });
            return res.data;
        });
        this.fetchEvents = () => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.get('/v1.2/events.json');
            const response = entities_1.EventsResponseCodec.decode(data);
            if (Either_1.isLeft(response))
                throw Either_1.toError(response.left);
            return response.right;
        });
        this.fetchEvent = (id) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.get(`/v1.2/events/${id}.json`);
            const response = entities_1.EventResponseCodec.decode(data);
            if (Either_1.isLeft(response))
                throw Either_1.toError(response.left);
            return response.right;
        });
        this.fetchGenres = () => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.get('/v1.2/genres.json');
            const response = entities_1.GenresResponseCodec.decode(data);
            if (Either_1.isLeft(response))
                throw Either_1.toError(response.left);
            return response.right;
        });
        this.fetchLivers = () => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.get('/v1.2/livers.json');
            const response = entities_1.LiversResponseCodec.decode(data);
            if (Either_1.isLeft(response))
                throw Either_1.toError(response.left);
            return response.right;
        });
        this.fetchLiver = (id) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.get(`/v1.2/livers/${id}.json`);
            const response = entities_1.LiverResponseCodec.decode(data);
            if (Either_1.isLeft(response))
                throw Either_1.toError(response.left);
            return response.right;
        });
        this.url = url;
        gaxios.instance.defaults = {
            baseURL: this.url,
        };
    }
}
exports.Gateway = Gateway;
//# sourceMappingURL=gateway.js.map