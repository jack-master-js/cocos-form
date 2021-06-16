import * as $protobuf from "protobufjs";
/** Namespace stage. */
export namespace stage {

    /** Properties of a Body. */
    interface IBody {

        /** Body ping */
        ping?: (stage.IPing|null);

        /** Body pong */
        pong?: (stage.IPong|null);

        /** Body systemNotice */
        systemNotice?: (stage.ISystemNotice|null);

        /** Body loginRes */
        loginRes?: (stage.ILoginRes|null);
    }

    /** Represents a Body. */
    class Body implements IBody {

        /**
         * Constructs a new Body.
         * @param [properties] Properties to set
         */
        constructor(properties?: stage.IBody);

        /** Body ping. */
        public ping?: (stage.IPing|null);

        /** Body pong. */
        public pong?: (stage.IPong|null);

        /** Body systemNotice. */
        public systemNotice?: (stage.ISystemNotice|null);

        /** Body loginRes. */
        public loginRes?: (stage.ILoginRes|null);

        /** Body cmd. */
        public cmd?: ("ping"|"pong"|"systemNotice"|"loginRes");

        /**
         * Creates a new Body instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Body instance
         */
        public static create(properties?: stage.IBody): stage.Body;

        /**
         * Encodes the specified Body message. Does not implicitly {@link stage.Body.verify|verify} messages.
         * @param message Body message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: stage.IBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Body message, length delimited. Does not implicitly {@link stage.Body.verify|verify} messages.
         * @param message Body message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: stage.IBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Body message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Body
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): stage.Body;

        /**
         * Decodes a Body message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Body
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): stage.Body;

        /**
         * Verifies a Body message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Body message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Body
         */
        public static fromObject(object: { [k: string]: any }): stage.Body;

        /**
         * Creates a plain object from a Body message. Also converts values to other types if specified.
         * @param message Body
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: stage.Body, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Body to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Ping. */
    interface IPing {

        /** Ping clientTime */
        clientTime?: (number|null);
    }

    /** Represents a Ping. */
    class Ping implements IPing {

        /**
         * Constructs a new Ping.
         * @param [properties] Properties to set
         */
        constructor(properties?: stage.IPing);

        /** Ping clientTime. */
        public clientTime: number;

        /**
         * Creates a new Ping instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Ping instance
         */
        public static create(properties?: stage.IPing): stage.Ping;

        /**
         * Encodes the specified Ping message. Does not implicitly {@link stage.Ping.verify|verify} messages.
         * @param message Ping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: stage.IPing, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Ping message, length delimited. Does not implicitly {@link stage.Ping.verify|verify} messages.
         * @param message Ping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: stage.IPing, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Ping message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): stage.Ping;

        /**
         * Decodes a Ping message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): stage.Ping;

        /**
         * Verifies a Ping message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Ping message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Ping
         */
        public static fromObject(object: { [k: string]: any }): stage.Ping;

        /**
         * Creates a plain object from a Ping message. Also converts values to other types if specified.
         * @param message Ping
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: stage.Ping, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Ping to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Pong. */
    interface IPong {

        /** Pong clientTime */
        clientTime?: (number|null);

        /** Pong serverTime */
        serverTime?: (number|null);
    }

    /** Represents a Pong. */
    class Pong implements IPong {

        /**
         * Constructs a new Pong.
         * @param [properties] Properties to set
         */
        constructor(properties?: stage.IPong);

        /** Pong clientTime. */
        public clientTime: number;

        /** Pong serverTime. */
        public serverTime: number;

        /**
         * Creates a new Pong instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Pong instance
         */
        public static create(properties?: stage.IPong): stage.Pong;

        /**
         * Encodes the specified Pong message. Does not implicitly {@link stage.Pong.verify|verify} messages.
         * @param message Pong message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: stage.IPong, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Pong message, length delimited. Does not implicitly {@link stage.Pong.verify|verify} messages.
         * @param message Pong message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: stage.IPong, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Pong message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Pong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): stage.Pong;

        /**
         * Decodes a Pong message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Pong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): stage.Pong;

        /**
         * Verifies a Pong message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Pong message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Pong
         */
        public static fromObject(object: { [k: string]: any }): stage.Pong;

        /**
         * Creates a plain object from a Pong message. Also converts values to other types if specified.
         * @param message Pong
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: stage.Pong, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Pong to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SystemNotice. */
    interface ISystemNotice {

        /** SystemNotice message */
        message?: (string|null);
    }

    /** Represents a SystemNotice. */
    class SystemNotice implements ISystemNotice {

        /**
         * Constructs a new SystemNotice.
         * @param [properties] Properties to set
         */
        constructor(properties?: stage.ISystemNotice);

        /** SystemNotice message. */
        public message: string;

        /**
         * Creates a new SystemNotice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SystemNotice instance
         */
        public static create(properties?: stage.ISystemNotice): stage.SystemNotice;

        /**
         * Encodes the specified SystemNotice message. Does not implicitly {@link stage.SystemNotice.verify|verify} messages.
         * @param message SystemNotice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: stage.ISystemNotice, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SystemNotice message, length delimited. Does not implicitly {@link stage.SystemNotice.verify|verify} messages.
         * @param message SystemNotice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: stage.ISystemNotice, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SystemNotice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SystemNotice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): stage.SystemNotice;

        /**
         * Decodes a SystemNotice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SystemNotice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): stage.SystemNotice;

        /**
         * Verifies a SystemNotice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SystemNotice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SystemNotice
         */
        public static fromObject(object: { [k: string]: any }): stage.SystemNotice;

        /**
         * Creates a plain object from a SystemNotice message. Also converts values to other types if specified.
         * @param message SystemNotice
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: stage.SystemNotice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SystemNotice to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PlayerInfo. */
    interface IPlayerInfo {

        /** PlayerInfo sessionId */
        sessionId?: (string|null);

        /** PlayerInfo loginName */
        loginName?: (string|null);

        /** PlayerInfo ip */
        ip?: (string|null);
    }

    /** Represents a PlayerInfo. */
    class PlayerInfo implements IPlayerInfo {

        /**
         * Constructs a new PlayerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: stage.IPlayerInfo);

        /** PlayerInfo sessionId. */
        public sessionId: string;

        /** PlayerInfo loginName. */
        public loginName: string;

        /** PlayerInfo ip. */
        public ip: string;

        /**
         * Creates a new PlayerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerInfo instance
         */
        public static create(properties?: stage.IPlayerInfo): stage.PlayerInfo;

        /**
         * Encodes the specified PlayerInfo message. Does not implicitly {@link stage.PlayerInfo.verify|verify} messages.
         * @param message PlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: stage.IPlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerInfo message, length delimited. Does not implicitly {@link stage.PlayerInfo.verify|verify} messages.
         * @param message PlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: stage.IPlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): stage.PlayerInfo;

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): stage.PlayerInfo;

        /**
         * Verifies a PlayerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerInfo
         */
        public static fromObject(object: { [k: string]: any }): stage.PlayerInfo;

        /**
         * Creates a plain object from a PlayerInfo message. Also converts values to other types if specified.
         * @param message PlayerInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: stage.PlayerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginRes. */
    interface ILoginRes {

        /** LoginRes playerInfo */
        playerInfo?: (stage.IPlayerInfo|null);
    }

    /** Represents a LoginRes. */
    class LoginRes implements ILoginRes {

        /**
         * Constructs a new LoginRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: stage.ILoginRes);

        /** LoginRes playerInfo. */
        public playerInfo?: (stage.IPlayerInfo|null);

        /**
         * Creates a new LoginRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginRes instance
         */
        public static create(properties?: stage.ILoginRes): stage.LoginRes;

        /**
         * Encodes the specified LoginRes message. Does not implicitly {@link stage.LoginRes.verify|verify} messages.
         * @param message LoginRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: stage.ILoginRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginRes message, length delimited. Does not implicitly {@link stage.LoginRes.verify|verify} messages.
         * @param message LoginRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: stage.ILoginRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): stage.LoginRes;

        /**
         * Decodes a LoginRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): stage.LoginRes;

        /**
         * Verifies a LoginRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginRes
         */
        public static fromObject(object: { [k: string]: any }): stage.LoginRes;

        /**
         * Creates a plain object from a LoginRes message. Also converts values to other types if specified.
         * @param message LoginRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: stage.LoginRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
