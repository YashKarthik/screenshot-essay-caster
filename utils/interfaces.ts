export interface CastsResponse {
    casts: Cast[];
    meta:  Meta;
}

export interface Cast {
    body:       Body;
    meta:       CastMeta;
    merkleRoot: string;
    uri:        string;
}

export interface Body {
    publishedAt: number;
    username:    string;
    data:        Data;
}

export interface Data {
    text:                  string;
    image:                 null | string;
    replyParentMerkleRoot: null | string;
    threadMerkleRoot:      null;
}

export interface CastMeta {
    displayName:         string;
    avatar:              string;
    isVerifiedAvatar:    boolean;
    numReplyChildren:    number;
    reactions:           Reactions;
    recasts:             Recasts;
    watches:             Recasts;
    replyParentUsername: ReplyParentUsername;
    mentions:            any[];
}

export interface Reactions {
    count: number;
    type:  string;
}

export interface Recasts {
    count: number;
}

export interface ReplyParentUsername {
    username: null | string;
}

export interface Meta {
    count:        number;
    responseTime: number;
}
