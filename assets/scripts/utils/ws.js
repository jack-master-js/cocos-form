/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.stage = (function() {
    
        /**
         * Namespace stage.
         * @exports stage
         * @namespace
         */
        var stage = {};
    
        stage.Body = (function() {
    
            /**
             * Properties of a Body.
             * @memberof stage
             * @interface IBody
             * @property {stage.IPing|null} [ping] Body ping
             * @property {stage.IPong|null} [pong] Body pong
             * @property {stage.ISystemNotice|null} [systemNotice] Body systemNotice
             * @property {stage.ILoginRes|null} [loginRes] Body loginRes
             */
    
            /**
             * Constructs a new Body.
             * @memberof stage
             * @classdesc Represents a Body.
             * @implements IBody
             * @constructor
             * @param {stage.IBody=} [properties] Properties to set
             */
            function Body(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Body ping.
             * @member {stage.IPing|null|undefined} ping
             * @memberof stage.Body
             * @instance
             */
            Body.prototype.ping = null;
    
            /**
             * Body pong.
             * @member {stage.IPong|null|undefined} pong
             * @memberof stage.Body
             * @instance
             */
            Body.prototype.pong = null;
    
            /**
             * Body systemNotice.
             * @member {stage.ISystemNotice|null|undefined} systemNotice
             * @memberof stage.Body
             * @instance
             */
            Body.prototype.systemNotice = null;
    
            /**
             * Body loginRes.
             * @member {stage.ILoginRes|null|undefined} loginRes
             * @memberof stage.Body
             * @instance
             */
            Body.prototype.loginRes = null;
    
            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;
    
            /**
             * Body cmd.
             * @member {"ping"|"pong"|"systemNotice"|"loginRes"|undefined} cmd
             * @memberof stage.Body
             * @instance
             */
            Object.defineProperty(Body.prototype, "cmd", {
                get: $util.oneOfGetter($oneOfFields = ["ping", "pong", "systemNotice", "loginRes"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Creates a new Body instance using the specified properties.
             * @function create
             * @memberof stage.Body
             * @static
             * @param {stage.IBody=} [properties] Properties to set
             * @returns {stage.Body} Body instance
             */
            Body.create = function create(properties) {
                return new Body(properties);
            };
    
            /**
             * Encodes the specified Body message. Does not implicitly {@link stage.Body.verify|verify} messages.
             * @function encode
             * @memberof stage.Body
             * @static
             * @param {stage.IBody} message Body message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Body.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ping != null && Object.hasOwnProperty.call(message, "ping"))
                    $root.stage.Ping.encode(message.ping, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.pong != null && Object.hasOwnProperty.call(message, "pong"))
                    $root.stage.Pong.encode(message.pong, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.systemNotice != null && Object.hasOwnProperty.call(message, "systemNotice"))
                    $root.stage.SystemNotice.encode(message.systemNotice, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.loginRes != null && Object.hasOwnProperty.call(message, "loginRes"))
                    $root.stage.LoginRes.encode(message.loginRes, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified Body message, length delimited. Does not implicitly {@link stage.Body.verify|verify} messages.
             * @function encodeDelimited
             * @memberof stage.Body
             * @static
             * @param {stage.IBody} message Body message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Body.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Body message from the specified reader or buffer.
             * @function decode
             * @memberof stage.Body
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {stage.Body} Body
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Body.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.stage.Body();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.ping = $root.stage.Ping.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.pong = $root.stage.Pong.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.systemNotice = $root.stage.SystemNotice.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.loginRes = $root.stage.LoginRes.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Body message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof stage.Body
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {stage.Body} Body
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Body.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Body message.
             * @function verify
             * @memberof stage.Body
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Body.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.ping != null && message.hasOwnProperty("ping")) {
                    properties.cmd = 1;
                    {
                        var error = $root.stage.Ping.verify(message.ping);
                        if (error)
                            return "ping." + error;
                    }
                }
                if (message.pong != null && message.hasOwnProperty("pong")) {
                    if (properties.cmd === 1)
                        return "cmd: multiple values";
                    properties.cmd = 1;
                    {
                        var error = $root.stage.Pong.verify(message.pong);
                        if (error)
                            return "pong." + error;
                    }
                }
                if (message.systemNotice != null && message.hasOwnProperty("systemNotice")) {
                    if (properties.cmd === 1)
                        return "cmd: multiple values";
                    properties.cmd = 1;
                    {
                        var error = $root.stage.SystemNotice.verify(message.systemNotice);
                        if (error)
                            return "systemNotice." + error;
                    }
                }
                if (message.loginRes != null && message.hasOwnProperty("loginRes")) {
                    if (properties.cmd === 1)
                        return "cmd: multiple values";
                    properties.cmd = 1;
                    {
                        var error = $root.stage.LoginRes.verify(message.loginRes);
                        if (error)
                            return "loginRes." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a Body message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof stage.Body
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {stage.Body} Body
             */
            Body.fromObject = function fromObject(object) {
                if (object instanceof $root.stage.Body)
                    return object;
                var message = new $root.stage.Body();
                if (object.ping != null) {
                    if (typeof object.ping !== "object")
                        throw TypeError(".stage.Body.ping: object expected");
                    message.ping = $root.stage.Ping.fromObject(object.ping);
                }
                if (object.pong != null) {
                    if (typeof object.pong !== "object")
                        throw TypeError(".stage.Body.pong: object expected");
                    message.pong = $root.stage.Pong.fromObject(object.pong);
                }
                if (object.systemNotice != null) {
                    if (typeof object.systemNotice !== "object")
                        throw TypeError(".stage.Body.systemNotice: object expected");
                    message.systemNotice = $root.stage.SystemNotice.fromObject(object.systemNotice);
                }
                if (object.loginRes != null) {
                    if (typeof object.loginRes !== "object")
                        throw TypeError(".stage.Body.loginRes: object expected");
                    message.loginRes = $root.stage.LoginRes.fromObject(object.loginRes);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a Body message. Also converts values to other types if specified.
             * @function toObject
             * @memberof stage.Body
             * @static
             * @param {stage.Body} message Body
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Body.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.ping != null && message.hasOwnProperty("ping")) {
                    object.ping = $root.stage.Ping.toObject(message.ping, options);
                    if (options.oneofs)
                        object.cmd = "ping";
                }
                if (message.pong != null && message.hasOwnProperty("pong")) {
                    object.pong = $root.stage.Pong.toObject(message.pong, options);
                    if (options.oneofs)
                        object.cmd = "pong";
                }
                if (message.systemNotice != null && message.hasOwnProperty("systemNotice")) {
                    object.systemNotice = $root.stage.SystemNotice.toObject(message.systemNotice, options);
                    if (options.oneofs)
                        object.cmd = "systemNotice";
                }
                if (message.loginRes != null && message.hasOwnProperty("loginRes")) {
                    object.loginRes = $root.stage.LoginRes.toObject(message.loginRes, options);
                    if (options.oneofs)
                        object.cmd = "loginRes";
                }
                return object;
            };
    
            /**
             * Converts this Body to JSON.
             * @function toJSON
             * @memberof stage.Body
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Body.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Body;
        })();
    
        stage.Ping = (function() {
    
            /**
             * Properties of a Ping.
             * @memberof stage
             * @interface IPing
             * @property {number|null} [clientTime] Ping clientTime
             */
    
            /**
             * Constructs a new Ping.
             * @memberof stage
             * @classdesc Represents a Ping.
             * @implements IPing
             * @constructor
             * @param {stage.IPing=} [properties] Properties to set
             */
            function Ping(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Ping clientTime.
             * @member {number} clientTime
             * @memberof stage.Ping
             * @instance
             */
            Ping.prototype.clientTime = 0;
    
            /**
             * Creates a new Ping instance using the specified properties.
             * @function create
             * @memberof stage.Ping
             * @static
             * @param {stage.IPing=} [properties] Properties to set
             * @returns {stage.Ping} Ping instance
             */
            Ping.create = function create(properties) {
                return new Ping(properties);
            };
    
            /**
             * Encodes the specified Ping message. Does not implicitly {@link stage.Ping.verify|verify} messages.
             * @function encode
             * @memberof stage.Ping
             * @static
             * @param {stage.IPing} message Ping message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Ping.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.clientTime != null && Object.hasOwnProperty.call(message, "clientTime"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.clientTime);
                return writer;
            };
    
            /**
             * Encodes the specified Ping message, length delimited. Does not implicitly {@link stage.Ping.verify|verify} messages.
             * @function encodeDelimited
             * @memberof stage.Ping
             * @static
             * @param {stage.IPing} message Ping message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Ping.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Ping message from the specified reader or buffer.
             * @function decode
             * @memberof stage.Ping
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {stage.Ping} Ping
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Ping.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.stage.Ping();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.clientTime = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Ping message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof stage.Ping
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {stage.Ping} Ping
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Ping.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Ping message.
             * @function verify
             * @memberof stage.Ping
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Ping.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.clientTime != null && message.hasOwnProperty("clientTime"))
                    if (typeof message.clientTime !== "number")
                        return "clientTime: number expected";
                return null;
            };
    
            /**
             * Creates a Ping message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof stage.Ping
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {stage.Ping} Ping
             */
            Ping.fromObject = function fromObject(object) {
                if (object instanceof $root.stage.Ping)
                    return object;
                var message = new $root.stage.Ping();
                if (object.clientTime != null)
                    message.clientTime = Number(object.clientTime);
                return message;
            };
    
            /**
             * Creates a plain object from a Ping message. Also converts values to other types if specified.
             * @function toObject
             * @memberof stage.Ping
             * @static
             * @param {stage.Ping} message Ping
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Ping.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.clientTime = 0;
                if (message.clientTime != null && message.hasOwnProperty("clientTime"))
                    object.clientTime = options.json && !isFinite(message.clientTime) ? String(message.clientTime) : message.clientTime;
                return object;
            };
    
            /**
             * Converts this Ping to JSON.
             * @function toJSON
             * @memberof stage.Ping
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Ping.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Ping;
        })();
    
        stage.Pong = (function() {
    
            /**
             * Properties of a Pong.
             * @memberof stage
             * @interface IPong
             * @property {number|null} [clientTime] Pong clientTime
             * @property {number|null} [serverTime] Pong serverTime
             */
    
            /**
             * Constructs a new Pong.
             * @memberof stage
             * @classdesc Represents a Pong.
             * @implements IPong
             * @constructor
             * @param {stage.IPong=} [properties] Properties to set
             */
            function Pong(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Pong clientTime.
             * @member {number} clientTime
             * @memberof stage.Pong
             * @instance
             */
            Pong.prototype.clientTime = 0;
    
            /**
             * Pong serverTime.
             * @member {number} serverTime
             * @memberof stage.Pong
             * @instance
             */
            Pong.prototype.serverTime = 0;
    
            /**
             * Creates a new Pong instance using the specified properties.
             * @function create
             * @memberof stage.Pong
             * @static
             * @param {stage.IPong=} [properties] Properties to set
             * @returns {stage.Pong} Pong instance
             */
            Pong.create = function create(properties) {
                return new Pong(properties);
            };
    
            /**
             * Encodes the specified Pong message. Does not implicitly {@link stage.Pong.verify|verify} messages.
             * @function encode
             * @memberof stage.Pong
             * @static
             * @param {stage.IPong} message Pong message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Pong.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.clientTime != null && Object.hasOwnProperty.call(message, "clientTime"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.clientTime);
                if (message.serverTime != null && Object.hasOwnProperty.call(message, "serverTime"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.serverTime);
                return writer;
            };
    
            /**
             * Encodes the specified Pong message, length delimited. Does not implicitly {@link stage.Pong.verify|verify} messages.
             * @function encodeDelimited
             * @memberof stage.Pong
             * @static
             * @param {stage.IPong} message Pong message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Pong.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Pong message from the specified reader or buffer.
             * @function decode
             * @memberof stage.Pong
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {stage.Pong} Pong
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Pong.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.stage.Pong();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.clientTime = reader.double();
                        break;
                    case 2:
                        message.serverTime = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Pong message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof stage.Pong
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {stage.Pong} Pong
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Pong.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Pong message.
             * @function verify
             * @memberof stage.Pong
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Pong.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.clientTime != null && message.hasOwnProperty("clientTime"))
                    if (typeof message.clientTime !== "number")
                        return "clientTime: number expected";
                if (message.serverTime != null && message.hasOwnProperty("serverTime"))
                    if (typeof message.serverTime !== "number")
                        return "serverTime: number expected";
                return null;
            };
    
            /**
             * Creates a Pong message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof stage.Pong
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {stage.Pong} Pong
             */
            Pong.fromObject = function fromObject(object) {
                if (object instanceof $root.stage.Pong)
                    return object;
                var message = new $root.stage.Pong();
                if (object.clientTime != null)
                    message.clientTime = Number(object.clientTime);
                if (object.serverTime != null)
                    message.serverTime = Number(object.serverTime);
                return message;
            };
    
            /**
             * Creates a plain object from a Pong message. Also converts values to other types if specified.
             * @function toObject
             * @memberof stage.Pong
             * @static
             * @param {stage.Pong} message Pong
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Pong.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.clientTime = 0;
                    object.serverTime = 0;
                }
                if (message.clientTime != null && message.hasOwnProperty("clientTime"))
                    object.clientTime = options.json && !isFinite(message.clientTime) ? String(message.clientTime) : message.clientTime;
                if (message.serverTime != null && message.hasOwnProperty("serverTime"))
                    object.serverTime = options.json && !isFinite(message.serverTime) ? String(message.serverTime) : message.serverTime;
                return object;
            };
    
            /**
             * Converts this Pong to JSON.
             * @function toJSON
             * @memberof stage.Pong
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Pong.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Pong;
        })();
    
        stage.SystemNotice = (function() {
    
            /**
             * Properties of a SystemNotice.
             * @memberof stage
             * @interface ISystemNotice
             * @property {string|null} [message] SystemNotice message
             */
    
            /**
             * Constructs a new SystemNotice.
             * @memberof stage
             * @classdesc Represents a SystemNotice.
             * @implements ISystemNotice
             * @constructor
             * @param {stage.ISystemNotice=} [properties] Properties to set
             */
            function SystemNotice(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * SystemNotice message.
             * @member {string} message
             * @memberof stage.SystemNotice
             * @instance
             */
            SystemNotice.prototype.message = "";
    
            /**
             * Creates a new SystemNotice instance using the specified properties.
             * @function create
             * @memberof stage.SystemNotice
             * @static
             * @param {stage.ISystemNotice=} [properties] Properties to set
             * @returns {stage.SystemNotice} SystemNotice instance
             */
            SystemNotice.create = function create(properties) {
                return new SystemNotice(properties);
            };
    
            /**
             * Encodes the specified SystemNotice message. Does not implicitly {@link stage.SystemNotice.verify|verify} messages.
             * @function encode
             * @memberof stage.SystemNotice
             * @static
             * @param {stage.ISystemNotice} message SystemNotice message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SystemNotice.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                return writer;
            };
    
            /**
             * Encodes the specified SystemNotice message, length delimited. Does not implicitly {@link stage.SystemNotice.verify|verify} messages.
             * @function encodeDelimited
             * @memberof stage.SystemNotice
             * @static
             * @param {stage.ISystemNotice} message SystemNotice message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SystemNotice.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a SystemNotice message from the specified reader or buffer.
             * @function decode
             * @memberof stage.SystemNotice
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {stage.SystemNotice} SystemNotice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SystemNotice.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.stage.SystemNotice();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.message = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a SystemNotice message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof stage.SystemNotice
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {stage.SystemNotice} SystemNotice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SystemNotice.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a SystemNotice message.
             * @function verify
             * @memberof stage.SystemNotice
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SystemNotice.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };
    
            /**
             * Creates a SystemNotice message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof stage.SystemNotice
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {stage.SystemNotice} SystemNotice
             */
            SystemNotice.fromObject = function fromObject(object) {
                if (object instanceof $root.stage.SystemNotice)
                    return object;
                var message = new $root.stage.SystemNotice();
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };
    
            /**
             * Creates a plain object from a SystemNotice message. Also converts values to other types if specified.
             * @function toObject
             * @memberof stage.SystemNotice
             * @static
             * @param {stage.SystemNotice} message SystemNotice
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SystemNotice.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.message = "";
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };
    
            /**
             * Converts this SystemNotice to JSON.
             * @function toJSON
             * @memberof stage.SystemNotice
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SystemNotice.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return SystemNotice;
        })();
    
        stage.PlayerInfo = (function() {
    
            /**
             * Properties of a PlayerInfo.
             * @memberof stage
             * @interface IPlayerInfo
             * @property {string|null} [sessionId] PlayerInfo sessionId
             * @property {string|null} [loginName] PlayerInfo loginName
             * @property {string|null} [ip] PlayerInfo ip
             */
    
            /**
             * Constructs a new PlayerInfo.
             * @memberof stage
             * @classdesc Represents a PlayerInfo.
             * @implements IPlayerInfo
             * @constructor
             * @param {stage.IPlayerInfo=} [properties] Properties to set
             */
            function PlayerInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PlayerInfo sessionId.
             * @member {string} sessionId
             * @memberof stage.PlayerInfo
             * @instance
             */
            PlayerInfo.prototype.sessionId = "";
    
            /**
             * PlayerInfo loginName.
             * @member {string} loginName
             * @memberof stage.PlayerInfo
             * @instance
             */
            PlayerInfo.prototype.loginName = "";
    
            /**
             * PlayerInfo ip.
             * @member {string} ip
             * @memberof stage.PlayerInfo
             * @instance
             */
            PlayerInfo.prototype.ip = "";
    
            /**
             * Creates a new PlayerInfo instance using the specified properties.
             * @function create
             * @memberof stage.PlayerInfo
             * @static
             * @param {stage.IPlayerInfo=} [properties] Properties to set
             * @returns {stage.PlayerInfo} PlayerInfo instance
             */
            PlayerInfo.create = function create(properties) {
                return new PlayerInfo(properties);
            };
    
            /**
             * Encodes the specified PlayerInfo message. Does not implicitly {@link stage.PlayerInfo.verify|verify} messages.
             * @function encode
             * @memberof stage.PlayerInfo
             * @static
             * @param {stage.IPlayerInfo} message PlayerInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.sessionId != null && Object.hasOwnProperty.call(message, "sessionId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.sessionId);
                if (message.loginName != null && Object.hasOwnProperty.call(message, "loginName"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.loginName);
                if (message.ip != null && Object.hasOwnProperty.call(message, "ip"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.ip);
                return writer;
            };
    
            /**
             * Encodes the specified PlayerInfo message, length delimited. Does not implicitly {@link stage.PlayerInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof stage.PlayerInfo
             * @static
             * @param {stage.IPlayerInfo} message PlayerInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a PlayerInfo message from the specified reader or buffer.
             * @function decode
             * @memberof stage.PlayerInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {stage.PlayerInfo} PlayerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.stage.PlayerInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.sessionId = reader.string();
                        break;
                    case 2:
                        message.loginName = reader.string();
                        break;
                    case 3:
                        message.ip = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a PlayerInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof stage.PlayerInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {stage.PlayerInfo} PlayerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a PlayerInfo message.
             * @function verify
             * @memberof stage.PlayerInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PlayerInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                    if (!$util.isString(message.sessionId))
                        return "sessionId: string expected";
                if (message.loginName != null && message.hasOwnProperty("loginName"))
                    if (!$util.isString(message.loginName))
                        return "loginName: string expected";
                if (message.ip != null && message.hasOwnProperty("ip"))
                    if (!$util.isString(message.ip))
                        return "ip: string expected";
                return null;
            };
    
            /**
             * Creates a PlayerInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof stage.PlayerInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {stage.PlayerInfo} PlayerInfo
             */
            PlayerInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.stage.PlayerInfo)
                    return object;
                var message = new $root.stage.PlayerInfo();
                if (object.sessionId != null)
                    message.sessionId = String(object.sessionId);
                if (object.loginName != null)
                    message.loginName = String(object.loginName);
                if (object.ip != null)
                    message.ip = String(object.ip);
                return message;
            };
    
            /**
             * Creates a plain object from a PlayerInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof stage.PlayerInfo
             * @static
             * @param {stage.PlayerInfo} message PlayerInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PlayerInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.sessionId = "";
                    object.loginName = "";
                    object.ip = "";
                }
                if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                    object.sessionId = message.sessionId;
                if (message.loginName != null && message.hasOwnProperty("loginName"))
                    object.loginName = message.loginName;
                if (message.ip != null && message.hasOwnProperty("ip"))
                    object.ip = message.ip;
                return object;
            };
    
            /**
             * Converts this PlayerInfo to JSON.
             * @function toJSON
             * @memberof stage.PlayerInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PlayerInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return PlayerInfo;
        })();
    
        stage.LoginRes = (function() {
    
            /**
             * Properties of a LoginRes.
             * @memberof stage
             * @interface ILoginRes
             * @property {stage.IPlayerInfo|null} [playerInfo] LoginRes playerInfo
             */
    
            /**
             * Constructs a new LoginRes.
             * @memberof stage
             * @classdesc Represents a LoginRes.
             * @implements ILoginRes
             * @constructor
             * @param {stage.ILoginRes=} [properties] Properties to set
             */
            function LoginRes(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * LoginRes playerInfo.
             * @member {stage.IPlayerInfo|null|undefined} playerInfo
             * @memberof stage.LoginRes
             * @instance
             */
            LoginRes.prototype.playerInfo = null;
    
            /**
             * Creates a new LoginRes instance using the specified properties.
             * @function create
             * @memberof stage.LoginRes
             * @static
             * @param {stage.ILoginRes=} [properties] Properties to set
             * @returns {stage.LoginRes} LoginRes instance
             */
            LoginRes.create = function create(properties) {
                return new LoginRes(properties);
            };
    
            /**
             * Encodes the specified LoginRes message. Does not implicitly {@link stage.LoginRes.verify|verify} messages.
             * @function encode
             * @memberof stage.LoginRes
             * @static
             * @param {stage.ILoginRes} message LoginRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LoginRes.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.playerInfo != null && Object.hasOwnProperty.call(message, "playerInfo"))
                    $root.stage.PlayerInfo.encode(message.playerInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified LoginRes message, length delimited. Does not implicitly {@link stage.LoginRes.verify|verify} messages.
             * @function encodeDelimited
             * @memberof stage.LoginRes
             * @static
             * @param {stage.ILoginRes} message LoginRes message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LoginRes.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a LoginRes message from the specified reader or buffer.
             * @function decode
             * @memberof stage.LoginRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {stage.LoginRes} LoginRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LoginRes.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.stage.LoginRes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.playerInfo = $root.stage.PlayerInfo.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a LoginRes message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof stage.LoginRes
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {stage.LoginRes} LoginRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LoginRes.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a LoginRes message.
             * @function verify
             * @memberof stage.LoginRes
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LoginRes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.playerInfo != null && message.hasOwnProperty("playerInfo")) {
                    var error = $root.stage.PlayerInfo.verify(message.playerInfo);
                    if (error)
                        return "playerInfo." + error;
                }
                return null;
            };
    
            /**
             * Creates a LoginRes message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof stage.LoginRes
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {stage.LoginRes} LoginRes
             */
            LoginRes.fromObject = function fromObject(object) {
                if (object instanceof $root.stage.LoginRes)
                    return object;
                var message = new $root.stage.LoginRes();
                if (object.playerInfo != null) {
                    if (typeof object.playerInfo !== "object")
                        throw TypeError(".stage.LoginRes.playerInfo: object expected");
                    message.playerInfo = $root.stage.PlayerInfo.fromObject(object.playerInfo);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a LoginRes message. Also converts values to other types if specified.
             * @function toObject
             * @memberof stage.LoginRes
             * @static
             * @param {stage.LoginRes} message LoginRes
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LoginRes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.playerInfo = null;
                if (message.playerInfo != null && message.hasOwnProperty("playerInfo"))
                    object.playerInfo = $root.stage.PlayerInfo.toObject(message.playerInfo, options);
                return object;
            };
    
            /**
             * Converts this LoginRes to JSON.
             * @function toJSON
             * @memberof stage.LoginRes
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LoginRes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return LoginRes;
        })();
    
        return stage;
    })();

    return $root;
});
