/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.ntx = (function() {

    /**
     * Namespace ntx.
     * @exports ntx
     * @namespace
     */
    var ntx = {};

    ntx.v2t = (function() {

        /**
         * Namespace v2t.
         * @memberof ntx
         * @namespace
         */
        var v2t = {};

        v2t.engine = (function() {

            /**
             * Namespace engine.
             * @memberof ntx.v2t
             * @namespace
             */
            var engine = {};

            engine.Event = (function() {

                /**
                 * Properties of an Event.
                 * @memberof ntx.v2t.engine
                 * @interface IEvent
                 * @property {ntx.v2t.engine.Event.ITimestamp} [timestamp] Event timestamp
                 * @property {ntx.v2t.engine.Event.ILabel} [label] Event label
                 * @property {ntx.v2t.engine.Event.IAudio} [audio] Event audio
                 * @property {ntx.v2t.engine.Event.IMeta} [meta] Event meta
                 */

                /**
                 * Constructs a new Event.
                 * @memberof ntx.v2t.engine
                 * @classdesc Represents an Event.
                 * @constructor
                 * @param {ntx.v2t.engine.IEvent=} [properties] Properties to set
                 */
                function Event(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Event timestamp.
                 * @member {(ntx.v2t.engine.Event.ITimestamp|null|undefined)}timestamp
                 * @memberof ntx.v2t.engine.Event
                 * @instance
                 */
                Event.prototype.timestamp = null;

                /**
                 * Event label.
                 * @member {(ntx.v2t.engine.Event.ILabel|null|undefined)}label
                 * @memberof ntx.v2t.engine.Event
                 * @instance
                 */
                Event.prototype.label = null;

                /**
                 * Event audio.
                 * @member {(ntx.v2t.engine.Event.IAudio|null|undefined)}audio
                 * @memberof ntx.v2t.engine.Event
                 * @instance
                 */
                Event.prototype.audio = null;

                /**
                 * Event meta.
                 * @member {(ntx.v2t.engine.Event.IMeta|null|undefined)}meta
                 * @memberof ntx.v2t.engine.Event
                 * @instance
                 */
                Event.prototype.meta = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                /**
                 * Event body.
                 * @member {string|undefined} body
                 * @memberof ntx.v2t.engine.Event
                 * @instance
                 */
                Object.defineProperty(Event.prototype, "body", {
                    get: $util.oneOfGetter($oneOfFields = ["timestamp", "label", "audio", "meta"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new Event instance using the specified properties.
                 * @function create
                 * @memberof ntx.v2t.engine.Event
                 * @static
                 * @param {ntx.v2t.engine.IEvent=} [properties] Properties to set
                 * @returns {ntx.v2t.engine.Event} Event instance
                 */
                Event.create = function create(properties) {
                    return new Event(properties);
                };

                /**
                 * Encodes the specified Event message. Does not implicitly {@link ntx.v2t.engine.Event.verify|verify} messages.
                 * @function encode
                 * @memberof ntx.v2t.engine.Event
                 * @static
                 * @param {ntx.v2t.engine.IEvent} message Event message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Event.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                        $root.ntx.v2t.engine.Event.Timestamp.encode(message.timestamp, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.label != null && message.hasOwnProperty("label"))
                        $root.ntx.v2t.engine.Event.Label.encode(message.label, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.audio != null && message.hasOwnProperty("audio"))
                        $root.ntx.v2t.engine.Event.Audio.encode(message.audio, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.meta != null && message.hasOwnProperty("meta"))
                        $root.ntx.v2t.engine.Event.Meta.encode(message.meta, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Event message, length delimited. Does not implicitly {@link ntx.v2t.engine.Event.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof ntx.v2t.engine.Event
                 * @static
                 * @param {ntx.v2t.engine.IEvent} message Event message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Event.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an Event message from the specified reader or buffer.
                 * @function decode
                 * @memberof ntx.v2t.engine.Event
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {ntx.v2t.engine.Event} Event
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Event.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ntx.v2t.engine.Event();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.timestamp = $root.ntx.v2t.engine.Event.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.label = $root.ntx.v2t.engine.Event.Label.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.audio = $root.ntx.v2t.engine.Event.Audio.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.meta = $root.ntx.v2t.engine.Event.Meta.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an Event message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof ntx.v2t.engine.Event
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {ntx.v2t.engine.Event} Event
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Event.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an Event message.
                 * @function verify
                 * @memberof ntx.v2t.engine.Event
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Event.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
                        properties.body = 1;
                        var error = $root.ntx.v2t.engine.Event.Timestamp.verify(message.timestamp);
                        if (error)
                            return "timestamp." + error;
                    }
                    if (message.label != null && message.hasOwnProperty("label")) {
                        if (properties.body === 1)
                            return "body: multiple values";
                        properties.body = 1;
                        error = $root.ntx.v2t.engine.Event.Label.verify(message.label);
                        if (error)
                            return "label." + error;
                    }
                    if (message.audio != null && message.hasOwnProperty("audio")) {
                        if (properties.body === 1)
                            return "body: multiple values";
                        properties.body = 1;
                        error = $root.ntx.v2t.engine.Event.Audio.verify(message.audio);
                        if (error)
                            return "audio." + error;
                    }
                    if (message.meta != null && message.hasOwnProperty("meta")) {
                        if (properties.body === 1)
                            return "body: multiple values";
                        properties.body = 1;
                        error = $root.ntx.v2t.engine.Event.Meta.verify(message.meta);
                        if (error)
                            return "meta." + error;
                    }
                    return null;
                };

                /**
                 * Creates an Event message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof ntx.v2t.engine.Event
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {ntx.v2t.engine.Event} Event
                 */
                Event.fromObject = function fromObject(object) {
                    if (object instanceof $root.ntx.v2t.engine.Event)
                        return object;
                    var message = new $root.ntx.v2t.engine.Event();
                    if (object.timestamp != null) {
                        if (typeof object.timestamp !== "object")
                            throw TypeError(".ntx.v2t.engine.Event.timestamp: object expected");
                        message.timestamp = $root.ntx.v2t.engine.Event.Timestamp.fromObject(object.timestamp);
                    }
                    if (object.label != null) {
                        if (typeof object.label !== "object")
                            throw TypeError(".ntx.v2t.engine.Event.label: object expected");
                        message.label = $root.ntx.v2t.engine.Event.Label.fromObject(object.label);
                    }
                    if (object.audio != null) {
                        if (typeof object.audio !== "object")
                            throw TypeError(".ntx.v2t.engine.Event.audio: object expected");
                        message.audio = $root.ntx.v2t.engine.Event.Audio.fromObject(object.audio);
                    }
                    if (object.meta != null) {
                        if (typeof object.meta !== "object")
                            throw TypeError(".ntx.v2t.engine.Event.meta: object expected");
                        message.meta = $root.ntx.v2t.engine.Event.Meta.fromObject(object.meta);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an Event message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof ntx.v2t.engine.Event
                 * @static
                 * @param {ntx.v2t.engine.Event} message Event
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Event.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
                        object.timestamp = $root.ntx.v2t.engine.Event.Timestamp.toObject(message.timestamp, options);
                        if (options.oneofs)
                            object.body = "timestamp";
                    }
                    if (message.label != null && message.hasOwnProperty("label")) {
                        object.label = $root.ntx.v2t.engine.Event.Label.toObject(message.label, options);
                        if (options.oneofs)
                            object.body = "label";
                    }
                    if (message.audio != null && message.hasOwnProperty("audio")) {
                        object.audio = $root.ntx.v2t.engine.Event.Audio.toObject(message.audio, options);
                        if (options.oneofs)
                            object.body = "audio";
                    }
                    if (message.meta != null && message.hasOwnProperty("meta")) {
                        object.meta = $root.ntx.v2t.engine.Event.Meta.toObject(message.meta, options);
                        if (options.oneofs)
                            object.body = "meta";
                    }
                    return object;
                };

                /**
                 * Converts this Event to JSON.
                 * @function toJSON
                 * @memberof ntx.v2t.engine.Event
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Event.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                Event.Timestamp = (function() {

                    /**
                     * Properties of a Timestamp.
                     * @memberof ntx.v2t.engine.Event
                     * @interface ITimestamp
                     * @property {number|Long} [timestamp] Timestamp timestamp
                     * @property {number|Long} [recovery] Timestamp recovery
                     */

                    /**
                     * Constructs a new Timestamp.
                     * @memberof ntx.v2t.engine.Event
                     * @classdesc Represents a Timestamp.
                     * @constructor
                     * @param {ntx.v2t.engine.Event.ITimestamp=} [properties] Properties to set
                     */
                    function Timestamp(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Timestamp timestamp.
                     * @member {number|Long}timestamp
                     * @memberof ntx.v2t.engine.Event.Timestamp
                     * @instance
                     */
                    Timestamp.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    /**
                     * Timestamp recovery.
                     * @member {number|Long}recovery
                     * @memberof ntx.v2t.engine.Event.Timestamp
                     * @instance
                     */
                    Timestamp.prototype.recovery = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * Timestamp value.
                     * @member {string|undefined} value
                     * @memberof ntx.v2t.engine.Event.Timestamp
                     * @instance
                     */
                    Object.defineProperty(Timestamp.prototype, "value", {
                        get: $util.oneOfGetter($oneOfFields = ["timestamp", "recovery"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new Timestamp instance using the specified properties.
                     * @function create
                     * @memberof ntx.v2t.engine.Event.Timestamp
                     * @static
                     * @param {ntx.v2t.engine.Event.ITimestamp=} [properties] Properties to set
                     * @returns {ntx.v2t.engine.Event.Timestamp} Timestamp instance
                     */
                    Timestamp.create = function create(properties) {
                        return new Timestamp(properties);
                    };

                    /**
                     * Encodes the specified Timestamp message. Does not implicitly {@link ntx.v2t.engine.Event.Timestamp.verify|verify} messages.
                     * @function encode
                     * @memberof ntx.v2t.engine.Event.Timestamp
                     * @static
                     * @param {ntx.v2t.engine.Event.ITimestamp} message Timestamp message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Timestamp.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.timestamp);
                        if (message.recovery != null && message.hasOwnProperty("recovery"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.recovery);
                        return writer;
                    };

                    /**
                     * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link ntx.v2t.engine.Event.Timestamp.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof ntx.v2t.engine.Event.Timestamp
                     * @static
                     * @param {ntx.v2t.engine.Event.ITimestamp} message Timestamp message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Timestamp message from the specified reader or buffer.
                     * @function decode
                     * @memberof ntx.v2t.engine.Event.Timestamp
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {ntx.v2t.engine.Event.Timestamp} Timestamp
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Timestamp.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ntx.v2t.engine.Event.Timestamp();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.timestamp = reader.uint64();
                                break;
                            case 2:
                                message.recovery = reader.uint64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Timestamp message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof ntx.v2t.engine.Event.Timestamp
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {ntx.v2t.engine.Event.Timestamp} Timestamp
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Timestamp.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Timestamp message.
                     * @function verify
                     * @memberof ntx.v2t.engine.Event.Timestamp
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Timestamp.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
                            properties.value = 1;
                            if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                                return "timestamp: integer|Long expected";
                        }
                        if (message.recovery != null && message.hasOwnProperty("recovery")) {
                            if (properties.value === 1)
                                return "value: multiple values";
                            properties.value = 1;
                            if (!$util.isInteger(message.recovery) && !(message.recovery && $util.isInteger(message.recovery.low) && $util.isInteger(message.recovery.high)))
                                return "recovery: integer|Long expected";
                        }
                        return null;
                    };

                    /**
                     * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof ntx.v2t.engine.Event.Timestamp
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {ntx.v2t.engine.Event.Timestamp} Timestamp
                     */
                    Timestamp.fromObject = function fromObject(object) {
                        if (object instanceof $root.ntx.v2t.engine.Event.Timestamp)
                            return object;
                        var message = new $root.ntx.v2t.engine.Event.Timestamp();
                        if (object.timestamp != null)
                            if ($util.Long)
                                (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
                            else if (typeof object.timestamp === "string")
                                message.timestamp = parseInt(object.timestamp, 10);
                            else if (typeof object.timestamp === "number")
                                message.timestamp = object.timestamp;
                            else if (typeof object.timestamp === "object")
                                message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
                        if (object.recovery != null)
                            if ($util.Long)
                                (message.recovery = $util.Long.fromValue(object.recovery)).unsigned = true;
                            else if (typeof object.recovery === "string")
                                message.recovery = parseInt(object.recovery, 10);
                            else if (typeof object.recovery === "number")
                                message.recovery = object.recovery;
                            else if (typeof object.recovery === "object")
                                message.recovery = new $util.LongBits(object.recovery.low >>> 0, object.recovery.high >>> 0).toNumber(true);
                        return message;
                    };

                    /**
                     * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof ntx.v2t.engine.Event.Timestamp
                     * @static
                     * @param {ntx.v2t.engine.Event.Timestamp} message Timestamp
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Timestamp.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
                            if (typeof message.timestamp === "number")
                                object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                            else
                                object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
                            if (options.oneofs)
                                object.value = "timestamp";
                        }
                        if (message.recovery != null && message.hasOwnProperty("recovery")) {
                            if (typeof message.recovery === "number")
                                object.recovery = options.longs === String ? String(message.recovery) : message.recovery;
                            else
                                object.recovery = options.longs === String ? $util.Long.prototype.toString.call(message.recovery) : options.longs === Number ? new $util.LongBits(message.recovery.low >>> 0, message.recovery.high >>> 0).toNumber(true) : message.recovery;
                            if (options.oneofs)
                                object.value = "recovery";
                        }
                        return object;
                    };

                    /**
                     * Converts this Timestamp to JSON.
                     * @function toJSON
                     * @memberof ntx.v2t.engine.Event.Timestamp
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Timestamp.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Timestamp;
                })();

                Event.Label = (function() {

                    /**
                     * Properties of a Label.
                     * @memberof ntx.v2t.engine.Event
                     * @interface ILabel
                     * @property {string} [item] Label item
                     * @property {string} [plus] Label plus
                     * @property {string} [noise] Label noise
                     */

                    /**
                     * Constructs a new Label.
                     * @memberof ntx.v2t.engine.Event
                     * @classdesc Represents a Label.
                     * @constructor
                     * @param {ntx.v2t.engine.Event.ILabel=} [properties] Properties to set
                     */
                    function Label(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Label item.
                     * @member {string}item
                     * @memberof ntx.v2t.engine.Event.Label
                     * @instance
                     */
                    Label.prototype.item = "";

                    /**
                     * Label plus.
                     * @member {string}plus
                     * @memberof ntx.v2t.engine.Event.Label
                     * @instance
                     */
                    Label.prototype.plus = "";

                    /**
                     * Label noise.
                     * @member {string}noise
                     * @memberof ntx.v2t.engine.Event.Label
                     * @instance
                     */
                    Label.prototype.noise = "";

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * Label label.
                     * @member {string|undefined} label
                     * @memberof ntx.v2t.engine.Event.Label
                     * @instance
                     */
                    Object.defineProperty(Label.prototype, "label", {
                        get: $util.oneOfGetter($oneOfFields = ["item", "plus", "noise"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new Label instance using the specified properties.
                     * @function create
                     * @memberof ntx.v2t.engine.Event.Label
                     * @static
                     * @param {ntx.v2t.engine.Event.ILabel=} [properties] Properties to set
                     * @returns {ntx.v2t.engine.Event.Label} Label instance
                     */
                    Label.create = function create(properties) {
                        return new Label(properties);
                    };

                    /**
                     * Encodes the specified Label message. Does not implicitly {@link ntx.v2t.engine.Event.Label.verify|verify} messages.
                     * @function encode
                     * @memberof ntx.v2t.engine.Event.Label
                     * @static
                     * @param {ntx.v2t.engine.Event.ILabel} message Label message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Label.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.item != null && message.hasOwnProperty("item"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.item);
                        if (message.plus != null && message.hasOwnProperty("plus"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.plus);
                        if (message.noise != null && message.hasOwnProperty("noise"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.noise);
                        return writer;
                    };

                    /**
                     * Encodes the specified Label message, length delimited. Does not implicitly {@link ntx.v2t.engine.Event.Label.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof ntx.v2t.engine.Event.Label
                     * @static
                     * @param {ntx.v2t.engine.Event.ILabel} message Label message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Label.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Label message from the specified reader or buffer.
                     * @function decode
                     * @memberof ntx.v2t.engine.Event.Label
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {ntx.v2t.engine.Event.Label} Label
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Label.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ntx.v2t.engine.Event.Label();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.item = reader.string();
                                break;
                            case 2:
                                message.plus = reader.string();
                                break;
                            case 3:
                                message.noise = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Label message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof ntx.v2t.engine.Event.Label
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {ntx.v2t.engine.Event.Label} Label
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Label.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Label message.
                     * @function verify
                     * @memberof ntx.v2t.engine.Event.Label
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Label.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.item != null && message.hasOwnProperty("item")) {
                            properties.label = 1;
                            if (!$util.isString(message.item))
                                return "item: string expected";
                        }
                        if (message.plus != null && message.hasOwnProperty("plus")) {
                            if (properties.label === 1)
                                return "label: multiple values";
                            properties.label = 1;
                            if (!$util.isString(message.plus))
                                return "plus: string expected";
                        }
                        if (message.noise != null && message.hasOwnProperty("noise")) {
                            if (properties.label === 1)
                                return "label: multiple values";
                            properties.label = 1;
                            if (!$util.isString(message.noise))
                                return "noise: string expected";
                        }
                        return null;
                    };

                    /**
                     * Creates a Label message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof ntx.v2t.engine.Event.Label
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {ntx.v2t.engine.Event.Label} Label
                     */
                    Label.fromObject = function fromObject(object) {
                        if (object instanceof $root.ntx.v2t.engine.Event.Label)
                            return object;
                        var message = new $root.ntx.v2t.engine.Event.Label();
                        if (object.item != null)
                            message.item = String(object.item);
                        if (object.plus != null)
                            message.plus = String(object.plus);
                        if (object.noise != null)
                            message.noise = String(object.noise);
                        return message;
                    };

                    /**
                     * Creates a plain object from a Label message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof ntx.v2t.engine.Event.Label
                     * @static
                     * @param {ntx.v2t.engine.Event.Label} message Label
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Label.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (message.item != null && message.hasOwnProperty("item")) {
                            object.item = message.item;
                            if (options.oneofs)
                                object.label = "item";
                        }
                        if (message.plus != null && message.hasOwnProperty("plus")) {
                            object.plus = message.plus;
                            if (options.oneofs)
                                object.label = "plus";
                        }
                        if (message.noise != null && message.hasOwnProperty("noise")) {
                            object.noise = message.noise;
                            if (options.oneofs)
                                object.label = "noise";
                        }
                        return object;
                    };

                    /**
                     * Converts this Label to JSON.
                     * @function toJSON
                     * @memberof ntx.v2t.engine.Event.Label
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Label.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Label;
                })();

                Event.Audio = (function() {

                    /**
                     * Properties of an Audio.
                     * @memberof ntx.v2t.engine.Event
                     * @interface IAudio
                     * @property {Uint8Array} [body] Audio body
                     * @property {number|Long} [offset] Audio offset
                     * @property {number|Long} [duration] Audio duration
                     */

                    /**
                     * Constructs a new Audio.
                     * @memberof ntx.v2t.engine.Event
                     * @classdesc Represents an Audio.
                     * @constructor
                     * @param {ntx.v2t.engine.Event.IAudio=} [properties] Properties to set
                     */
                    function Audio(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Audio body.
                     * @member {Uint8Array}body
                     * @memberof ntx.v2t.engine.Event.Audio
                     * @instance
                     */
                    Audio.prototype.body = $util.newBuffer([]);

                    /**
                     * Audio offset.
                     * @member {number|Long}offset
                     * @memberof ntx.v2t.engine.Event.Audio
                     * @instance
                     */
                    Audio.prototype.offset = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    /**
                     * Audio duration.
                     * @member {number|Long}duration
                     * @memberof ntx.v2t.engine.Event.Audio
                     * @instance
                     */
                    Audio.prototype.duration = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    /**
                     * Creates a new Audio instance using the specified properties.
                     * @function create
                     * @memberof ntx.v2t.engine.Event.Audio
                     * @static
                     * @param {ntx.v2t.engine.Event.IAudio=} [properties] Properties to set
                     * @returns {ntx.v2t.engine.Event.Audio} Audio instance
                     */
                    Audio.create = function create(properties) {
                        return new Audio(properties);
                    };

                    /**
                     * Encodes the specified Audio message. Does not implicitly {@link ntx.v2t.engine.Event.Audio.verify|verify} messages.
                     * @function encode
                     * @memberof ntx.v2t.engine.Event.Audio
                     * @static
                     * @param {ntx.v2t.engine.Event.IAudio} message Audio message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Audio.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.body != null && message.hasOwnProperty("body"))
                            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.body);
                        if (message.offset != null && message.hasOwnProperty("offset"))
                            writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.offset);
                        if (message.duration != null && message.hasOwnProperty("duration"))
                            writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.duration);
                        return writer;
                    };

                    /**
                     * Encodes the specified Audio message, length delimited. Does not implicitly {@link ntx.v2t.engine.Event.Audio.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof ntx.v2t.engine.Event.Audio
                     * @static
                     * @param {ntx.v2t.engine.Event.IAudio} message Audio message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Audio.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an Audio message from the specified reader or buffer.
                     * @function decode
                     * @memberof ntx.v2t.engine.Event.Audio
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {ntx.v2t.engine.Event.Audio} Audio
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Audio.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ntx.v2t.engine.Event.Audio();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.body = reader.bytes();
                                break;
                            case 5:
                                message.offset = reader.uint64();
                                break;
                            case 6:
                                message.duration = reader.uint64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an Audio message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof ntx.v2t.engine.Event.Audio
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {ntx.v2t.engine.Event.Audio} Audio
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Audio.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an Audio message.
                     * @function verify
                     * @memberof ntx.v2t.engine.Event.Audio
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Audio.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.body != null && message.hasOwnProperty("body"))
                            if (!(message.body && typeof message.body.length === "number" || $util.isString(message.body)))
                                return "body: buffer expected";
                        if (message.offset != null && message.hasOwnProperty("offset"))
                            if (!$util.isInteger(message.offset) && !(message.offset && $util.isInteger(message.offset.low) && $util.isInteger(message.offset.high)))
                                return "offset: integer|Long expected";
                        if (message.duration != null && message.hasOwnProperty("duration"))
                            if (!$util.isInteger(message.duration) && !(message.duration && $util.isInteger(message.duration.low) && $util.isInteger(message.duration.high)))
                                return "duration: integer|Long expected";
                        return null;
                    };

                    /**
                     * Creates an Audio message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof ntx.v2t.engine.Event.Audio
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {ntx.v2t.engine.Event.Audio} Audio
                     */
                    Audio.fromObject = function fromObject(object) {
                        if (object instanceof $root.ntx.v2t.engine.Event.Audio)
                            return object;
                        var message = new $root.ntx.v2t.engine.Event.Audio();
                        if (object.body != null)
                            if (typeof object.body === "string")
                                $util.base64.decode(object.body, message.body = $util.newBuffer($util.base64.length(object.body)), 0);
                            else if (object.body.length)
                                message.body = object.body;
                        if (object.offset != null)
                            if ($util.Long)
                                (message.offset = $util.Long.fromValue(object.offset)).unsigned = true;
                            else if (typeof object.offset === "string")
                                message.offset = parseInt(object.offset, 10);
                            else if (typeof object.offset === "number")
                                message.offset = object.offset;
                            else if (typeof object.offset === "object")
                                message.offset = new $util.LongBits(object.offset.low >>> 0, object.offset.high >>> 0).toNumber(true);
                        if (object.duration != null)
                            if ($util.Long)
                                (message.duration = $util.Long.fromValue(object.duration)).unsigned = true;
                            else if (typeof object.duration === "string")
                                message.duration = parseInt(object.duration, 10);
                            else if (typeof object.duration === "number")
                                message.duration = object.duration;
                            else if (typeof object.duration === "object")
                                message.duration = new $util.LongBits(object.duration.low >>> 0, object.duration.high >>> 0).toNumber(true);
                        return message;
                    };

                    /**
                     * Creates a plain object from an Audio message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof ntx.v2t.engine.Event.Audio
                     * @static
                     * @param {ntx.v2t.engine.Event.Audio} message Audio
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Audio.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.body = options.bytes === String ? "" : [];
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.offset = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.offset = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.duration = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.duration = options.longs === String ? "0" : 0;
                        }
                        if (message.body != null && message.hasOwnProperty("body"))
                            object.body = options.bytes === String ? $util.base64.encode(message.body, 0, message.body.length) : options.bytes === Array ? Array.prototype.slice.call(message.body) : message.body;
                        if (message.offset != null && message.hasOwnProperty("offset"))
                            if (typeof message.offset === "number")
                                object.offset = options.longs === String ? String(message.offset) : message.offset;
                            else
                                object.offset = options.longs === String ? $util.Long.prototype.toString.call(message.offset) : options.longs === Number ? new $util.LongBits(message.offset.low >>> 0, message.offset.high >>> 0).toNumber(true) : message.offset;
                        if (message.duration != null && message.hasOwnProperty("duration"))
                            if (typeof message.duration === "number")
                                object.duration = options.longs === String ? String(message.duration) : message.duration;
                            else
                                object.duration = options.longs === String ? $util.Long.prototype.toString.call(message.duration) : options.longs === Number ? new $util.LongBits(message.duration.low >>> 0, message.duration.high >>> 0).toNumber(true) : message.duration;
                        return object;
                    };

                    /**
                     * Converts this Audio to JSON.
                     * @function toJSON
                     * @memberof ntx.v2t.engine.Event.Audio
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Audio.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Audio;
                })();

                Event.Meta = (function() {

                    /**
                     * Properties of a Meta.
                     * @memberof ntx.v2t.engine.Event
                     * @interface IMeta
                     * @property {ntx.v2t.engine.Event.Meta.IConfidence} [confidence] Meta confidence
                     */

                    /**
                     * Constructs a new Meta.
                     * @memberof ntx.v2t.engine.Event
                     * @classdesc Represents a Meta.
                     * @constructor
                     * @param {ntx.v2t.engine.Event.IMeta=} [properties] Properties to set
                     */
                    function Meta(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Meta confidence.
                     * @member {(ntx.v2t.engine.Event.Meta.IConfidence|null|undefined)}confidence
                     * @memberof ntx.v2t.engine.Event.Meta
                     * @instance
                     */
                    Meta.prototype.confidence = null;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * Meta body.
                     * @member {string|undefined} body
                     * @memberof ntx.v2t.engine.Event.Meta
                     * @instance
                     */
                    Object.defineProperty(Meta.prototype, "body", {
                        get: $util.oneOfGetter($oneOfFields = ["confidence"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new Meta instance using the specified properties.
                     * @function create
                     * @memberof ntx.v2t.engine.Event.Meta
                     * @static
                     * @param {ntx.v2t.engine.Event.IMeta=} [properties] Properties to set
                     * @returns {ntx.v2t.engine.Event.Meta} Meta instance
                     */
                    Meta.create = function create(properties) {
                        return new Meta(properties);
                    };

                    /**
                     * Encodes the specified Meta message. Does not implicitly {@link ntx.v2t.engine.Event.Meta.verify|verify} messages.
                     * @function encode
                     * @memberof ntx.v2t.engine.Event.Meta
                     * @static
                     * @param {ntx.v2t.engine.Event.IMeta} message Meta message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Meta.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.confidence != null && message.hasOwnProperty("confidence"))
                            $root.ntx.v2t.engine.Event.Meta.Confidence.encode(message.confidence, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified Meta message, length delimited. Does not implicitly {@link ntx.v2t.engine.Event.Meta.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof ntx.v2t.engine.Event.Meta
                     * @static
                     * @param {ntx.v2t.engine.Event.IMeta} message Meta message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Meta.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Meta message from the specified reader or buffer.
                     * @function decode
                     * @memberof ntx.v2t.engine.Event.Meta
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {ntx.v2t.engine.Event.Meta} Meta
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Meta.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ntx.v2t.engine.Event.Meta();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.confidence = $root.ntx.v2t.engine.Event.Meta.Confidence.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Meta message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof ntx.v2t.engine.Event.Meta
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {ntx.v2t.engine.Event.Meta} Meta
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Meta.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Meta message.
                     * @function verify
                     * @memberof ntx.v2t.engine.Event.Meta
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Meta.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.confidence != null && message.hasOwnProperty("confidence")) {
                            properties.body = 1;
                            var error = $root.ntx.v2t.engine.Event.Meta.Confidence.verify(message.confidence);
                            if (error)
                                return "confidence." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a Meta message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof ntx.v2t.engine.Event.Meta
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {ntx.v2t.engine.Event.Meta} Meta
                     */
                    Meta.fromObject = function fromObject(object) {
                        if (object instanceof $root.ntx.v2t.engine.Event.Meta)
                            return object;
                        var message = new $root.ntx.v2t.engine.Event.Meta();
                        if (object.confidence != null) {
                            if (typeof object.confidence !== "object")
                                throw TypeError(".ntx.v2t.engine.Event.Meta.confidence: object expected");
                            message.confidence = $root.ntx.v2t.engine.Event.Meta.Confidence.fromObject(object.confidence);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Meta message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof ntx.v2t.engine.Event.Meta
                     * @static
                     * @param {ntx.v2t.engine.Event.Meta} message Meta
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Meta.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (message.confidence != null && message.hasOwnProperty("confidence")) {
                            object.confidence = $root.ntx.v2t.engine.Event.Meta.Confidence.toObject(message.confidence, options);
                            if (options.oneofs)
                                object.body = "confidence";
                        }
                        return object;
                    };

                    /**
                     * Converts this Meta to JSON.
                     * @function toJSON
                     * @memberof ntx.v2t.engine.Event.Meta
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Meta.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    Meta.Confidence = (function() {

                        /**
                         * Properties of a Confidence.
                         * @memberof ntx.v2t.engine.Event.Meta
                         * @interface IConfidence
                         * @property {number} [value] Confidence value
                         */

                        /**
                         * Constructs a new Confidence.
                         * @memberof ntx.v2t.engine.Event.Meta
                         * @classdesc Represents a Confidence.
                         * @constructor
                         * @param {ntx.v2t.engine.Event.Meta.IConfidence=} [properties] Properties to set
                         */
                        function Confidence(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Confidence value.
                         * @member {number}value
                         * @memberof ntx.v2t.engine.Event.Meta.Confidence
                         * @instance
                         */
                        Confidence.prototype.value = 0;

                        /**
                         * Creates a new Confidence instance using the specified properties.
                         * @function create
                         * @memberof ntx.v2t.engine.Event.Meta.Confidence
                         * @static
                         * @param {ntx.v2t.engine.Event.Meta.IConfidence=} [properties] Properties to set
                         * @returns {ntx.v2t.engine.Event.Meta.Confidence} Confidence instance
                         */
                        Confidence.create = function create(properties) {
                            return new Confidence(properties);
                        };

                        /**
                         * Encodes the specified Confidence message. Does not implicitly {@link ntx.v2t.engine.Event.Meta.Confidence.verify|verify} messages.
                         * @function encode
                         * @memberof ntx.v2t.engine.Event.Meta.Confidence
                         * @static
                         * @param {ntx.v2t.engine.Event.Meta.IConfidence} message Confidence message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Confidence.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.value != null && message.hasOwnProperty("value"))
                                writer.uint32(/* id 1, wireType 1 =*/9).double(message.value);
                            return writer;
                        };

                        /**
                         * Encodes the specified Confidence message, length delimited. Does not implicitly {@link ntx.v2t.engine.Event.Meta.Confidence.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof ntx.v2t.engine.Event.Meta.Confidence
                         * @static
                         * @param {ntx.v2t.engine.Event.Meta.IConfidence} message Confidence message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Confidence.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a Confidence message from the specified reader or buffer.
                         * @function decode
                         * @memberof ntx.v2t.engine.Event.Meta.Confidence
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {ntx.v2t.engine.Event.Meta.Confidence} Confidence
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Confidence.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ntx.v2t.engine.Event.Meta.Confidence();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.value = reader.double();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a Confidence message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof ntx.v2t.engine.Event.Meta.Confidence
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {ntx.v2t.engine.Event.Meta.Confidence} Confidence
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Confidence.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a Confidence message.
                         * @function verify
                         * @memberof ntx.v2t.engine.Event.Meta.Confidence
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Confidence.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.value != null && message.hasOwnProperty("value"))
                                if (typeof message.value !== "number")
                                    return "value: number expected";
                            return null;
                        };

                        /**
                         * Creates a Confidence message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof ntx.v2t.engine.Event.Meta.Confidence
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {ntx.v2t.engine.Event.Meta.Confidence} Confidence
                         */
                        Confidence.fromObject = function fromObject(object) {
                            if (object instanceof $root.ntx.v2t.engine.Event.Meta.Confidence)
                                return object;
                            var message = new $root.ntx.v2t.engine.Event.Meta.Confidence();
                            if (object.value != null)
                                message.value = Number(object.value);
                            return message;
                        };

                        /**
                         * Creates a plain object from a Confidence message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof ntx.v2t.engine.Event.Meta.Confidence
                         * @static
                         * @param {ntx.v2t.engine.Event.Meta.Confidence} message Confidence
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Confidence.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults)
                                object.value = 0;
                            if (message.value != null && message.hasOwnProperty("value"))
                                object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
                            return object;
                        };

                        /**
                         * Converts this Confidence to JSON.
                         * @function toJSON
                         * @memberof ntx.v2t.engine.Event.Meta.Confidence
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Confidence.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return Confidence;
                    })();

                    return Meta;
                })();

                return Event;
            })();

            engine.Events = (function() {

                /**
                 * Properties of an Events.
                 * @memberof ntx.v2t.engine
                 * @interface IEvents
                 * @property {Array.<ntx.v2t.engine.IEvent>} [events] Events events
                 * @property {boolean} [lookahead] Events lookahead
                 * @property {number|Long} [receivedAt] Events receivedAt
                 * @property {number} [channelId] Events channelId
                 */

                /**
                 * Constructs a new Events.
                 * @memberof ntx.v2t.engine
                 * @classdesc Represents an Events.
                 * @constructor
                 * @param {ntx.v2t.engine.IEvents=} [properties] Properties to set
                 */
                function Events(properties) {
                    this.events = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Events events.
                 * @member {Array.<ntx.v2t.engine.IEvent>}events
                 * @memberof ntx.v2t.engine.Events
                 * @instance
                 */
                Events.prototype.events = $util.emptyArray;

                /**
                 * Events lookahead.
                 * @member {boolean}lookahead
                 * @memberof ntx.v2t.engine.Events
                 * @instance
                 */
                Events.prototype.lookahead = false;

                /**
                 * Events receivedAt.
                 * @member {number|Long}receivedAt
                 * @memberof ntx.v2t.engine.Events
                 * @instance
                 */
                Events.prototype.receivedAt = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                /**
                 * Events channelId.
                 * @member {number}channelId
                 * @memberof ntx.v2t.engine.Events
                 * @instance
                 */
                Events.prototype.channelId = 0;

                /**
                 * Creates a new Events instance using the specified properties.
                 * @function create
                 * @memberof ntx.v2t.engine.Events
                 * @static
                 * @param {ntx.v2t.engine.IEvents=} [properties] Properties to set
                 * @returns {ntx.v2t.engine.Events} Events instance
                 */
                Events.create = function create(properties) {
                    return new Events(properties);
                };

                /**
                 * Encodes the specified Events message. Does not implicitly {@link ntx.v2t.engine.Events.verify|verify} messages.
                 * @function encode
                 * @memberof ntx.v2t.engine.Events
                 * @static
                 * @param {ntx.v2t.engine.IEvents} message Events message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Events.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.events != null && message.events.length)
                        for (var i = 0; i < message.events.length; ++i)
                            $root.ntx.v2t.engine.Event.encode(message.events[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.lookahead != null && message.hasOwnProperty("lookahead"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.lookahead);
                    if (message.receivedAt != null && message.hasOwnProperty("receivedAt"))
                        writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.receivedAt);
                    if (message.channelId != null && message.hasOwnProperty("channelId"))
                        writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.channelId);
                    return writer;
                };

                /**
                 * Encodes the specified Events message, length delimited. Does not implicitly {@link ntx.v2t.engine.Events.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof ntx.v2t.engine.Events
                 * @static
                 * @param {ntx.v2t.engine.IEvents} message Events message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Events.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an Events message from the specified reader or buffer.
                 * @function decode
                 * @memberof ntx.v2t.engine.Events
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {ntx.v2t.engine.Events} Events
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Events.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ntx.v2t.engine.Events();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.events && message.events.length))
                                message.events = [];
                            message.events.push($root.ntx.v2t.engine.Event.decode(reader, reader.uint32()));
                            break;
                        case 2:
                            message.lookahead = reader.bool();
                            break;
                        case 3:
                            message.receivedAt = reader.uint64();
                            break;
                        case 4:
                            message.channelId = reader.uint32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an Events message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof ntx.v2t.engine.Events
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {ntx.v2t.engine.Events} Events
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Events.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an Events message.
                 * @function verify
                 * @memberof ntx.v2t.engine.Events
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Events.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.events != null && message.hasOwnProperty("events")) {
                        if (!Array.isArray(message.events))
                            return "events: array expected";
                        for (var i = 0; i < message.events.length; ++i) {
                            var error = $root.ntx.v2t.engine.Event.verify(message.events[i]);
                            if (error)
                                return "events." + error;
                        }
                    }
                    if (message.lookahead != null && message.hasOwnProperty("lookahead"))
                        if (typeof message.lookahead !== "boolean")
                            return "lookahead: boolean expected";
                    if (message.receivedAt != null && message.hasOwnProperty("receivedAt"))
                        if (!$util.isInteger(message.receivedAt) && !(message.receivedAt && $util.isInteger(message.receivedAt.low) && $util.isInteger(message.receivedAt.high)))
                            return "receivedAt: integer|Long expected";
                    if (message.channelId != null && message.hasOwnProperty("channelId"))
                        if (!$util.isInteger(message.channelId))
                            return "channelId: integer expected";
                    return null;
                };

                /**
                 * Creates an Events message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof ntx.v2t.engine.Events
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {ntx.v2t.engine.Events} Events
                 */
                Events.fromObject = function fromObject(object) {
                    if (object instanceof $root.ntx.v2t.engine.Events)
                        return object;
                    var message = new $root.ntx.v2t.engine.Events();
                    if (object.events) {
                        if (!Array.isArray(object.events))
                            throw TypeError(".ntx.v2t.engine.Events.events: array expected");
                        message.events = [];
                        for (var i = 0; i < object.events.length; ++i) {
                            if (typeof object.events[i] !== "object")
                                throw TypeError(".ntx.v2t.engine.Events.events: object expected");
                            message.events[i] = $root.ntx.v2t.engine.Event.fromObject(object.events[i]);
                        }
                    }
                    if (object.lookahead != null)
                        message.lookahead = Boolean(object.lookahead);
                    if (object.receivedAt != null)
                        if ($util.Long)
                            (message.receivedAt = $util.Long.fromValue(object.receivedAt)).unsigned = true;
                        else if (typeof object.receivedAt === "string")
                            message.receivedAt = parseInt(object.receivedAt, 10);
                        else if (typeof object.receivedAt === "number")
                            message.receivedAt = object.receivedAt;
                        else if (typeof object.receivedAt === "object")
                            message.receivedAt = new $util.LongBits(object.receivedAt.low >>> 0, object.receivedAt.high >>> 0).toNumber(true);
                    if (object.channelId != null)
                        message.channelId = object.channelId >>> 0;
                    return message;
                };

                /**
                 * Creates a plain object from an Events message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof ntx.v2t.engine.Events
                 * @static
                 * @param {ntx.v2t.engine.Events} message Events
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Events.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.events = [];
                    if (options.defaults) {
                        object.lookahead = false;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.receivedAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.receivedAt = options.longs === String ? "0" : 0;
                        object.channelId = 0;
                    }
                    if (message.events && message.events.length) {
                        object.events = [];
                        for (var j = 0; j < message.events.length; ++j)
                            object.events[j] = $root.ntx.v2t.engine.Event.toObject(message.events[j], options);
                    }
                    if (message.lookahead != null && message.hasOwnProperty("lookahead"))
                        object.lookahead = message.lookahead;
                    if (message.receivedAt != null && message.hasOwnProperty("receivedAt"))
                        if (typeof message.receivedAt === "number")
                            object.receivedAt = options.longs === String ? String(message.receivedAt) : message.receivedAt;
                        else
                            object.receivedAt = options.longs === String ? $util.Long.prototype.toString.call(message.receivedAt) : options.longs === Number ? new $util.LongBits(message.receivedAt.low >>> 0, message.receivedAt.high >>> 0).toNumber(true) : message.receivedAt;
                    if (message.channelId != null && message.hasOwnProperty("channelId"))
                        object.channelId = message.channelId;
                    return object;
                };

                /**
                 * Converts this Events to JSON.
                 * @function toJSON
                 * @memberof ntx.v2t.engine.Events
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Events.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Events;
            })();

            /**
             * EngineModule enum.
             * @enum {string}
             * @property {number} MODULE_NONE=0 MODULE_NONE value
             * @property {number} MODULE_VAD=1 MODULE_VAD value
             * @property {number} MODULE_V2T=5 MODULE_V2T value
             * @property {number} MODULE_PPC=11 MODULE_PPC value
             */
            engine.EngineModule = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "MODULE_NONE"] = 0;
                values[valuesById[1] = "MODULE_VAD"] = 1;
                values[valuesById[5] = "MODULE_V2T"] = 5;
                values[valuesById[11] = "MODULE_PPC"] = 11;
                return values;
            })();

            engine.Lexicon = (function() {

                /**
                 * Properties of a Lexicon.
                 * @memberof ntx.v2t.engine
                 * @interface ILexicon
                 * @property {ntx.v2t.engine.Lexicon.Alphabet} [alpha] Lexicon alpha
                 * @property {Array.<ntx.v2t.engine.Lexicon.ILexItem>} [items] Lexicon items
                 */

                /**
                 * Constructs a new Lexicon.
                 * @memberof ntx.v2t.engine
                 * @classdesc Represents a Lexicon.
                 * @constructor
                 * @param {ntx.v2t.engine.ILexicon=} [properties] Properties to set
                 */
                function Lexicon(properties) {
                    this.items = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Lexicon alpha.
                 * @member {ntx.v2t.engine.Lexicon.Alphabet}alpha
                 * @memberof ntx.v2t.engine.Lexicon
                 * @instance
                 */
                Lexicon.prototype.alpha = 0;

                /**
                 * Lexicon items.
                 * @member {Array.<ntx.v2t.engine.Lexicon.ILexItem>}items
                 * @memberof ntx.v2t.engine.Lexicon
                 * @instance
                 */
                Lexicon.prototype.items = $util.emptyArray;

                /**
                 * Creates a new Lexicon instance using the specified properties.
                 * @function create
                 * @memberof ntx.v2t.engine.Lexicon
                 * @static
                 * @param {ntx.v2t.engine.ILexicon=} [properties] Properties to set
                 * @returns {ntx.v2t.engine.Lexicon} Lexicon instance
                 */
                Lexicon.create = function create(properties) {
                    return new Lexicon(properties);
                };

                /**
                 * Encodes the specified Lexicon message. Does not implicitly {@link ntx.v2t.engine.Lexicon.verify|verify} messages.
                 * @function encode
                 * @memberof ntx.v2t.engine.Lexicon
                 * @static
                 * @param {ntx.v2t.engine.ILexicon} message Lexicon message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Lexicon.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.alpha != null && message.hasOwnProperty("alpha"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.alpha);
                    if (message.items != null && message.items.length)
                        for (var i = 0; i < message.items.length; ++i)
                            $root.ntx.v2t.engine.Lexicon.LexItem.encode(message.items[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Lexicon message, length delimited. Does not implicitly {@link ntx.v2t.engine.Lexicon.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof ntx.v2t.engine.Lexicon
                 * @static
                 * @param {ntx.v2t.engine.ILexicon} message Lexicon message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Lexicon.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Lexicon message from the specified reader or buffer.
                 * @function decode
                 * @memberof ntx.v2t.engine.Lexicon
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {ntx.v2t.engine.Lexicon} Lexicon
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Lexicon.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ntx.v2t.engine.Lexicon();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.alpha = reader.int32();
                            break;
                        case 2:
                            if (!(message.items && message.items.length))
                                message.items = [];
                            message.items.push($root.ntx.v2t.engine.Lexicon.LexItem.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Lexicon message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof ntx.v2t.engine.Lexicon
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {ntx.v2t.engine.Lexicon} Lexicon
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Lexicon.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Lexicon message.
                 * @function verify
                 * @memberof ntx.v2t.engine.Lexicon
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Lexicon.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.alpha != null && message.hasOwnProperty("alpha"))
                        switch (message.alpha) {
                        default:
                            return "alpha: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        }
                    if (message.items != null && message.hasOwnProperty("items")) {
                        if (!Array.isArray(message.items))
                            return "items: array expected";
                        for (var i = 0; i < message.items.length; ++i) {
                            var error = $root.ntx.v2t.engine.Lexicon.LexItem.verify(message.items[i]);
                            if (error)
                                return "items." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a Lexicon message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof ntx.v2t.engine.Lexicon
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {ntx.v2t.engine.Lexicon} Lexicon
                 */
                Lexicon.fromObject = function fromObject(object) {
                    if (object instanceof $root.ntx.v2t.engine.Lexicon)
                        return object;
                    var message = new $root.ntx.v2t.engine.Lexicon();
                    switch (object.alpha) {
                    case "LEXICON_ALPHABET_NONE":
                    case 0:
                        message.alpha = 0;
                        break;
                    case "LEXICON_ALPHABET_CZ48":
                    case 1:
                        message.alpha = 1;
                        break;
                    case "LEXICON_ALPHABET_SK48":
                    case 2:
                        message.alpha = 2;
                        break;
                    case "LEXICON_ALPHABET_HR39":
                    case 3:
                        message.alpha = 3;
                        break;
                    case "LEXICON_ALPHABET_SL39":
                    case 4:
                        message.alpha = 4;
                        break;
                    case "LEXICON_ALPHABET_PL42":
                    case 5:
                        message.alpha = 5;
                        break;
                    }
                    if (object.items) {
                        if (!Array.isArray(object.items))
                            throw TypeError(".ntx.v2t.engine.Lexicon.items: array expected");
                        message.items = [];
                        for (var i = 0; i < object.items.length; ++i) {
                            if (typeof object.items[i] !== "object")
                                throw TypeError(".ntx.v2t.engine.Lexicon.items: object expected");
                            message.items[i] = $root.ntx.v2t.engine.Lexicon.LexItem.fromObject(object.items[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Lexicon message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof ntx.v2t.engine.Lexicon
                 * @static
                 * @param {ntx.v2t.engine.Lexicon} message Lexicon
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Lexicon.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.items = [];
                    if (options.defaults)
                        object.alpha = options.enums === String ? "LEXICON_ALPHABET_NONE" : 0;
                    if (message.alpha != null && message.hasOwnProperty("alpha"))
                        object.alpha = options.enums === String ? $root.ntx.v2t.engine.Lexicon.Alphabet[message.alpha] : message.alpha;
                    if (message.items && message.items.length) {
                        object.items = [];
                        for (var j = 0; j < message.items.length; ++j)
                            object.items[j] = $root.ntx.v2t.engine.Lexicon.LexItem.toObject(message.items[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this Lexicon to JSON.
                 * @function toJSON
                 * @memberof ntx.v2t.engine.Lexicon
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Lexicon.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Alphabet enum.
                 * @enum {string}
                 * @property {number} LEXICON_ALPHABET_NONE=0 LEXICON_ALPHABET_NONE value
                 * @property {number} LEXICON_ALPHABET_CZ48=1 LEXICON_ALPHABET_CZ48 value
                 * @property {number} LEXICON_ALPHABET_SK48=2 LEXICON_ALPHABET_SK48 value
                 * @property {number} LEXICON_ALPHABET_HR39=3 LEXICON_ALPHABET_HR39 value
                 * @property {number} LEXICON_ALPHABET_SL39=4 LEXICON_ALPHABET_SL39 value
                 * @property {number} LEXICON_ALPHABET_PL42=5 LEXICON_ALPHABET_PL42 value
                 */
                Lexicon.Alphabet = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "LEXICON_ALPHABET_NONE"] = 0;
                    values[valuesById[1] = "LEXICON_ALPHABET_CZ48"] = 1;
                    values[valuesById[2] = "LEXICON_ALPHABET_SK48"] = 2;
                    values[valuesById[3] = "LEXICON_ALPHABET_HR39"] = 3;
                    values[valuesById[4] = "LEXICON_ALPHABET_SL39"] = 4;
                    values[valuesById[5] = "LEXICON_ALPHABET_PL42"] = 5;
                    return values;
                })();

                Lexicon.UserItem = (function() {

                    /**
                     * Properties of a UserItem.
                     * @memberof ntx.v2t.engine.Lexicon
                     * @interface IUserItem
                     * @property {string} [sym] UserItem sym
                     * @property {string} [pron] UserItem pron
                     */

                    /**
                     * Constructs a new UserItem.
                     * @memberof ntx.v2t.engine.Lexicon
                     * @classdesc Represents a UserItem.
                     * @constructor
                     * @param {ntx.v2t.engine.Lexicon.IUserItem=} [properties] Properties to set
                     */
                    function UserItem(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * UserItem sym.
                     * @member {string}sym
                     * @memberof ntx.v2t.engine.Lexicon.UserItem
                     * @instance
                     */
                    UserItem.prototype.sym = "";

                    /**
                     * UserItem pron.
                     * @member {string}pron
                     * @memberof ntx.v2t.engine.Lexicon.UserItem
                     * @instance
                     */
                    UserItem.prototype.pron = "";

                    /**
                     * Creates a new UserItem instance using the specified properties.
                     * @function create
                     * @memberof ntx.v2t.engine.Lexicon.UserItem
                     * @static
                     * @param {ntx.v2t.engine.Lexicon.IUserItem=} [properties] Properties to set
                     * @returns {ntx.v2t.engine.Lexicon.UserItem} UserItem instance
                     */
                    UserItem.create = function create(properties) {
                        return new UserItem(properties);
                    };

                    /**
                     * Encodes the specified UserItem message. Does not implicitly {@link ntx.v2t.engine.Lexicon.UserItem.verify|verify} messages.
                     * @function encode
                     * @memberof ntx.v2t.engine.Lexicon.UserItem
                     * @static
                     * @param {ntx.v2t.engine.Lexicon.IUserItem} message UserItem message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UserItem.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.sym != null && message.hasOwnProperty("sym"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.sym);
                        if (message.pron != null && message.hasOwnProperty("pron"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.pron);
                        return writer;
                    };

                    /**
                     * Encodes the specified UserItem message, length delimited. Does not implicitly {@link ntx.v2t.engine.Lexicon.UserItem.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof ntx.v2t.engine.Lexicon.UserItem
                     * @static
                     * @param {ntx.v2t.engine.Lexicon.IUserItem} message UserItem message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UserItem.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a UserItem message from the specified reader or buffer.
                     * @function decode
                     * @memberof ntx.v2t.engine.Lexicon.UserItem
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {ntx.v2t.engine.Lexicon.UserItem} UserItem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UserItem.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ntx.v2t.engine.Lexicon.UserItem();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.sym = reader.string();
                                break;
                            case 2:
                                message.pron = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a UserItem message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof ntx.v2t.engine.Lexicon.UserItem
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {ntx.v2t.engine.Lexicon.UserItem} UserItem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UserItem.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a UserItem message.
                     * @function verify
                     * @memberof ntx.v2t.engine.Lexicon.UserItem
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UserItem.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.sym != null && message.hasOwnProperty("sym"))
                            if (!$util.isString(message.sym))
                                return "sym: string expected";
                        if (message.pron != null && message.hasOwnProperty("pron"))
                            if (!$util.isString(message.pron))
                                return "pron: string expected";
                        return null;
                    };

                    /**
                     * Creates a UserItem message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof ntx.v2t.engine.Lexicon.UserItem
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {ntx.v2t.engine.Lexicon.UserItem} UserItem
                     */
                    UserItem.fromObject = function fromObject(object) {
                        if (object instanceof $root.ntx.v2t.engine.Lexicon.UserItem)
                            return object;
                        var message = new $root.ntx.v2t.engine.Lexicon.UserItem();
                        if (object.sym != null)
                            message.sym = String(object.sym);
                        if (object.pron != null)
                            message.pron = String(object.pron);
                        return message;
                    };

                    /**
                     * Creates a plain object from a UserItem message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof ntx.v2t.engine.Lexicon.UserItem
                     * @static
                     * @param {ntx.v2t.engine.Lexicon.UserItem} message UserItem
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UserItem.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.sym = "";
                            object.pron = "";
                        }
                        if (message.sym != null && message.hasOwnProperty("sym"))
                            object.sym = message.sym;
                        if (message.pron != null && message.hasOwnProperty("pron"))
                            object.pron = message.pron;
                        return object;
                    };

                    /**
                     * Converts this UserItem to JSON.
                     * @function toJSON
                     * @memberof ntx.v2t.engine.Lexicon.UserItem
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UserItem.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return UserItem;
                })();

                Lexicon.NoiseItem = (function() {

                    /**
                     * Properties of a NoiseItem.
                     * @memberof ntx.v2t.engine.Lexicon
                     * @interface INoiseItem
                     * @property {string} [sym] NoiseItem sym
                     * @property {string} [pron] NoiseItem pron
                     */

                    /**
                     * Constructs a new NoiseItem.
                     * @memberof ntx.v2t.engine.Lexicon
                     * @classdesc Represents a NoiseItem.
                     * @constructor
                     * @param {ntx.v2t.engine.Lexicon.INoiseItem=} [properties] Properties to set
                     */
                    function NoiseItem(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * NoiseItem sym.
                     * @member {string}sym
                     * @memberof ntx.v2t.engine.Lexicon.NoiseItem
                     * @instance
                     */
                    NoiseItem.prototype.sym = "";

                    /**
                     * NoiseItem pron.
                     * @member {string}pron
                     * @memberof ntx.v2t.engine.Lexicon.NoiseItem
                     * @instance
                     */
                    NoiseItem.prototype.pron = "";

                    /**
                     * Creates a new NoiseItem instance using the specified properties.
                     * @function create
                     * @memberof ntx.v2t.engine.Lexicon.NoiseItem
                     * @static
                     * @param {ntx.v2t.engine.Lexicon.INoiseItem=} [properties] Properties to set
                     * @returns {ntx.v2t.engine.Lexicon.NoiseItem} NoiseItem instance
                     */
                    NoiseItem.create = function create(properties) {
                        return new NoiseItem(properties);
                    };

                    /**
                     * Encodes the specified NoiseItem message. Does not implicitly {@link ntx.v2t.engine.Lexicon.NoiseItem.verify|verify} messages.
                     * @function encode
                     * @memberof ntx.v2t.engine.Lexicon.NoiseItem
                     * @static
                     * @param {ntx.v2t.engine.Lexicon.INoiseItem} message NoiseItem message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NoiseItem.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.sym != null && message.hasOwnProperty("sym"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.sym);
                        if (message.pron != null && message.hasOwnProperty("pron"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.pron);
                        return writer;
                    };

                    /**
                     * Encodes the specified NoiseItem message, length delimited. Does not implicitly {@link ntx.v2t.engine.Lexicon.NoiseItem.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof ntx.v2t.engine.Lexicon.NoiseItem
                     * @static
                     * @param {ntx.v2t.engine.Lexicon.INoiseItem} message NoiseItem message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NoiseItem.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a NoiseItem message from the specified reader or buffer.
                     * @function decode
                     * @memberof ntx.v2t.engine.Lexicon.NoiseItem
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {ntx.v2t.engine.Lexicon.NoiseItem} NoiseItem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NoiseItem.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ntx.v2t.engine.Lexicon.NoiseItem();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.sym = reader.string();
                                break;
                            case 2:
                                message.pron = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a NoiseItem message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof ntx.v2t.engine.Lexicon.NoiseItem
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {ntx.v2t.engine.Lexicon.NoiseItem} NoiseItem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NoiseItem.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a NoiseItem message.
                     * @function verify
                     * @memberof ntx.v2t.engine.Lexicon.NoiseItem
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    NoiseItem.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.sym != null && message.hasOwnProperty("sym"))
                            if (!$util.isString(message.sym))
                                return "sym: string expected";
                        if (message.pron != null && message.hasOwnProperty("pron"))
                            if (!$util.isString(message.pron))
                                return "pron: string expected";
                        return null;
                    };

                    /**
                     * Creates a NoiseItem message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof ntx.v2t.engine.Lexicon.NoiseItem
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {ntx.v2t.engine.Lexicon.NoiseItem} NoiseItem
                     */
                    NoiseItem.fromObject = function fromObject(object) {
                        if (object instanceof $root.ntx.v2t.engine.Lexicon.NoiseItem)
                            return object;
                        var message = new $root.ntx.v2t.engine.Lexicon.NoiseItem();
                        if (object.sym != null)
                            message.sym = String(object.sym);
                        if (object.pron != null)
                            message.pron = String(object.pron);
                        return message;
                    };

                    /**
                     * Creates a plain object from a NoiseItem message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof ntx.v2t.engine.Lexicon.NoiseItem
                     * @static
                     * @param {ntx.v2t.engine.Lexicon.NoiseItem} message NoiseItem
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    NoiseItem.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.sym = "";
                            object.pron = "";
                        }
                        if (message.sym != null && message.hasOwnProperty("sym"))
                            object.sym = message.sym;
                        if (message.pron != null && message.hasOwnProperty("pron"))
                            object.pron = message.pron;
                        return object;
                    };

                    /**
                     * Converts this NoiseItem to JSON.
                     * @function toJSON
                     * @memberof ntx.v2t.engine.Lexicon.NoiseItem
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    NoiseItem.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return NoiseItem;
                })();

                Lexicon.MainItem = (function() {

                    /**
                     * Properties of a MainItem.
                     * @memberof ntx.v2t.engine.Lexicon
                     * @interface IMainItem
                     * @property {string} [sym] MainItem sym
                     * @property {string} [pron] MainItem pron
                     * @property {string} [mnt] MainItem mnt
                     */

                    /**
                     * Constructs a new MainItem.
                     * @memberof ntx.v2t.engine.Lexicon
                     * @classdesc Represents a MainItem.
                     * @constructor
                     * @param {ntx.v2t.engine.Lexicon.IMainItem=} [properties] Properties to set
                     */
                    function MainItem(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * MainItem sym.
                     * @member {string}sym
                     * @memberof ntx.v2t.engine.Lexicon.MainItem
                     * @instance
                     */
                    MainItem.prototype.sym = "";

                    /**
                     * MainItem pron.
                     * @member {string}pron
                     * @memberof ntx.v2t.engine.Lexicon.MainItem
                     * @instance
                     */
                    MainItem.prototype.pron = "";

                    /**
                     * MainItem mnt.
                     * @member {string}mnt
                     * @memberof ntx.v2t.engine.Lexicon.MainItem
                     * @instance
                     */
                    MainItem.prototype.mnt = "";

                    /**
                     * Creates a new MainItem instance using the specified properties.
                     * @function create
                     * @memberof ntx.v2t.engine.Lexicon.MainItem
                     * @static
                     * @param {ntx.v2t.engine.Lexicon.IMainItem=} [properties] Properties to set
                     * @returns {ntx.v2t.engine.Lexicon.MainItem} MainItem instance
                     */
                    MainItem.create = function create(properties) {
                        return new MainItem(properties);
                    };

                    /**
                     * Encodes the specified MainItem message. Does not implicitly {@link ntx.v2t.engine.Lexicon.MainItem.verify|verify} messages.
                     * @function encode
                     * @memberof ntx.v2t.engine.Lexicon.MainItem
                     * @static
                     * @param {ntx.v2t.engine.Lexicon.IMainItem} message MainItem message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MainItem.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.sym != null && message.hasOwnProperty("sym"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.sym);
                        if (message.pron != null && message.hasOwnProperty("pron"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.pron);
                        if (message.mnt != null && message.hasOwnProperty("mnt"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.mnt);
                        return writer;
                    };

                    /**
                     * Encodes the specified MainItem message, length delimited. Does not implicitly {@link ntx.v2t.engine.Lexicon.MainItem.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof ntx.v2t.engine.Lexicon.MainItem
                     * @static
                     * @param {ntx.v2t.engine.Lexicon.IMainItem} message MainItem message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MainItem.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a MainItem message from the specified reader or buffer.
                     * @function decode
                     * @memberof ntx.v2t.engine.Lexicon.MainItem
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {ntx.v2t.engine.Lexicon.MainItem} MainItem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    MainItem.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ntx.v2t.engine.Lexicon.MainItem();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.sym = reader.string();
                                break;
                            case 2:
                                message.pron = reader.string();
                                break;
                            case 3:
                                message.mnt = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a MainItem message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof ntx.v2t.engine.Lexicon.MainItem
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {ntx.v2t.engine.Lexicon.MainItem} MainItem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    MainItem.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a MainItem message.
                     * @function verify
                     * @memberof ntx.v2t.engine.Lexicon.MainItem
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    MainItem.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.sym != null && message.hasOwnProperty("sym"))
                            if (!$util.isString(message.sym))
                                return "sym: string expected";
                        if (message.pron != null && message.hasOwnProperty("pron"))
                            if (!$util.isString(message.pron))
                                return "pron: string expected";
                        if (message.mnt != null && message.hasOwnProperty("mnt"))
                            if (!$util.isString(message.mnt))
                                return "mnt: string expected";
                        return null;
                    };

                    /**
                     * Creates a MainItem message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof ntx.v2t.engine.Lexicon.MainItem
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {ntx.v2t.engine.Lexicon.MainItem} MainItem
                     */
                    MainItem.fromObject = function fromObject(object) {
                        if (object instanceof $root.ntx.v2t.engine.Lexicon.MainItem)
                            return object;
                        var message = new $root.ntx.v2t.engine.Lexicon.MainItem();
                        if (object.sym != null)
                            message.sym = String(object.sym);
                        if (object.pron != null)
                            message.pron = String(object.pron);
                        if (object.mnt != null)
                            message.mnt = String(object.mnt);
                        return message;
                    };

                    /**
                     * Creates a plain object from a MainItem message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof ntx.v2t.engine.Lexicon.MainItem
                     * @static
                     * @param {ntx.v2t.engine.Lexicon.MainItem} message MainItem
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    MainItem.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.sym = "";
                            object.pron = "";
                            object.mnt = "";
                        }
                        if (message.sym != null && message.hasOwnProperty("sym"))
                            object.sym = message.sym;
                        if (message.pron != null && message.hasOwnProperty("pron"))
                            object.pron = message.pron;
                        if (message.mnt != null && message.hasOwnProperty("mnt"))
                            object.mnt = message.mnt;
                        return object;
                    };

                    /**
                     * Converts this MainItem to JSON.
                     * @function toJSON
                     * @memberof ntx.v2t.engine.Lexicon.MainItem
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    MainItem.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return MainItem;
                })();

                Lexicon.LexItem = (function() {

                    /**
                     * Properties of a LexItem.
                     * @memberof ntx.v2t.engine.Lexicon
                     * @interface ILexItem
                     * @property {ntx.v2t.engine.Lexicon.IUserItem} [user] LexItem user
                     * @property {ntx.v2t.engine.Lexicon.IMainItem} [main] LexItem main
                     * @property {ntx.v2t.engine.Lexicon.INoiseItem} [noise] LexItem noise
                     */

                    /**
                     * Constructs a new LexItem.
                     * @memberof ntx.v2t.engine.Lexicon
                     * @classdesc Represents a LexItem.
                     * @constructor
                     * @param {ntx.v2t.engine.Lexicon.ILexItem=} [properties] Properties to set
                     */
                    function LexItem(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * LexItem user.
                     * @member {(ntx.v2t.engine.Lexicon.IUserItem|null|undefined)}user
                     * @memberof ntx.v2t.engine.Lexicon.LexItem
                     * @instance
                     */
                    LexItem.prototype.user = null;

                    /**
                     * LexItem main.
                     * @member {(ntx.v2t.engine.Lexicon.IMainItem|null|undefined)}main
                     * @memberof ntx.v2t.engine.Lexicon.LexItem
                     * @instance
                     */
                    LexItem.prototype.main = null;

                    /**
                     * LexItem noise.
                     * @member {(ntx.v2t.engine.Lexicon.INoiseItem|null|undefined)}noise
                     * @memberof ntx.v2t.engine.Lexicon.LexItem
                     * @instance
                     */
                    LexItem.prototype.noise = null;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * LexItem item.
                     * @member {string|undefined} item
                     * @memberof ntx.v2t.engine.Lexicon.LexItem
                     * @instance
                     */
                    Object.defineProperty(LexItem.prototype, "item", {
                        get: $util.oneOfGetter($oneOfFields = ["user", "main", "noise"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new LexItem instance using the specified properties.
                     * @function create
                     * @memberof ntx.v2t.engine.Lexicon.LexItem
                     * @static
                     * @param {ntx.v2t.engine.Lexicon.ILexItem=} [properties] Properties to set
                     * @returns {ntx.v2t.engine.Lexicon.LexItem} LexItem instance
                     */
                    LexItem.create = function create(properties) {
                        return new LexItem(properties);
                    };

                    /**
                     * Encodes the specified LexItem message. Does not implicitly {@link ntx.v2t.engine.Lexicon.LexItem.verify|verify} messages.
                     * @function encode
                     * @memberof ntx.v2t.engine.Lexicon.LexItem
                     * @static
                     * @param {ntx.v2t.engine.Lexicon.ILexItem} message LexItem message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    LexItem.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.user != null && message.hasOwnProperty("user"))
                            $root.ntx.v2t.engine.Lexicon.UserItem.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.main != null && message.hasOwnProperty("main"))
                            $root.ntx.v2t.engine.Lexicon.MainItem.encode(message.main, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.noise != null && message.hasOwnProperty("noise"))
                            $root.ntx.v2t.engine.Lexicon.NoiseItem.encode(message.noise, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified LexItem message, length delimited. Does not implicitly {@link ntx.v2t.engine.Lexicon.LexItem.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof ntx.v2t.engine.Lexicon.LexItem
                     * @static
                     * @param {ntx.v2t.engine.Lexicon.ILexItem} message LexItem message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    LexItem.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a LexItem message from the specified reader or buffer.
                     * @function decode
                     * @memberof ntx.v2t.engine.Lexicon.LexItem
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {ntx.v2t.engine.Lexicon.LexItem} LexItem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    LexItem.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ntx.v2t.engine.Lexicon.LexItem();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.user = $root.ntx.v2t.engine.Lexicon.UserItem.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.main = $root.ntx.v2t.engine.Lexicon.MainItem.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.noise = $root.ntx.v2t.engine.Lexicon.NoiseItem.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a LexItem message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof ntx.v2t.engine.Lexicon.LexItem
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {ntx.v2t.engine.Lexicon.LexItem} LexItem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    LexItem.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a LexItem message.
                     * @function verify
                     * @memberof ntx.v2t.engine.Lexicon.LexItem
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    LexItem.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.user != null && message.hasOwnProperty("user")) {
                            properties.item = 1;
                            var error = $root.ntx.v2t.engine.Lexicon.UserItem.verify(message.user);
                            if (error)
                                return "user." + error;
                        }
                        if (message.main != null && message.hasOwnProperty("main")) {
                            if (properties.item === 1)
                                return "item: multiple values";
                            properties.item = 1;
                            error = $root.ntx.v2t.engine.Lexicon.MainItem.verify(message.main);
                            if (error)
                                return "main." + error;
                        }
                        if (message.noise != null && message.hasOwnProperty("noise")) {
                            if (properties.item === 1)
                                return "item: multiple values";
                            properties.item = 1;
                            error = $root.ntx.v2t.engine.Lexicon.NoiseItem.verify(message.noise);
                            if (error)
                                return "noise." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a LexItem message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof ntx.v2t.engine.Lexicon.LexItem
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {ntx.v2t.engine.Lexicon.LexItem} LexItem
                     */
                    LexItem.fromObject = function fromObject(object) {
                        if (object instanceof $root.ntx.v2t.engine.Lexicon.LexItem)
                            return object;
                        var message = new $root.ntx.v2t.engine.Lexicon.LexItem();
                        if (object.user != null) {
                            if (typeof object.user !== "object")
                                throw TypeError(".ntx.v2t.engine.Lexicon.LexItem.user: object expected");
                            message.user = $root.ntx.v2t.engine.Lexicon.UserItem.fromObject(object.user);
                        }
                        if (object.main != null) {
                            if (typeof object.main !== "object")
                                throw TypeError(".ntx.v2t.engine.Lexicon.LexItem.main: object expected");
                            message.main = $root.ntx.v2t.engine.Lexicon.MainItem.fromObject(object.main);
                        }
                        if (object.noise != null) {
                            if (typeof object.noise !== "object")
                                throw TypeError(".ntx.v2t.engine.Lexicon.LexItem.noise: object expected");
                            message.noise = $root.ntx.v2t.engine.Lexicon.NoiseItem.fromObject(object.noise);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a LexItem message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof ntx.v2t.engine.Lexicon.LexItem
                     * @static
                     * @param {ntx.v2t.engine.Lexicon.LexItem} message LexItem
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    LexItem.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (message.user != null && message.hasOwnProperty("user")) {
                            object.user = $root.ntx.v2t.engine.Lexicon.UserItem.toObject(message.user, options);
                            if (options.oneofs)
                                object.item = "user";
                        }
                        if (message.main != null && message.hasOwnProperty("main")) {
                            object.main = $root.ntx.v2t.engine.Lexicon.MainItem.toObject(message.main, options);
                            if (options.oneofs)
                                object.item = "main";
                        }
                        if (message.noise != null && message.hasOwnProperty("noise")) {
                            object.noise = $root.ntx.v2t.engine.Lexicon.NoiseItem.toObject(message.noise, options);
                            if (options.oneofs)
                                object.item = "noise";
                        }
                        return object;
                    };

                    /**
                     * Converts this LexItem to JSON.
                     * @function toJSON
                     * @memberof ntx.v2t.engine.Lexicon.LexItem
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    LexItem.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return LexItem;
                })();

                return Lexicon;
            })();

            engine.AudioFormat = (function() {

                /**
                 * Properties of an AudioFormat.
                 * @memberof ntx.v2t.engine
                 * @interface IAudioFormat
                 * @property {ntx.v2t.engine.AudioFormat.IAutoDetect} [auto] AudioFormat auto
                 * @property {ntx.v2t.engine.AudioFormat.IPCM} [pcm] AudioFormat pcm
                 * @property {ntx.v2t.engine.AudioFormat.IHeader} [header] AudioFormat header
                 */

                /**
                 * Constructs a new AudioFormat.
                 * @memberof ntx.v2t.engine
                 * @classdesc Represents an AudioFormat.
                 * @constructor
                 * @param {ntx.v2t.engine.IAudioFormat=} [properties] Properties to set
                 */
                function AudioFormat(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * AudioFormat auto.
                 * @member {(ntx.v2t.engine.AudioFormat.IAutoDetect|null|undefined)}auto
                 * @memberof ntx.v2t.engine.AudioFormat
                 * @instance
                 */
                AudioFormat.prototype.auto = null;

                /**
                 * AudioFormat pcm.
                 * @member {(ntx.v2t.engine.AudioFormat.IPCM|null|undefined)}pcm
                 * @memberof ntx.v2t.engine.AudioFormat
                 * @instance
                 */
                AudioFormat.prototype.pcm = null;

                /**
                 * AudioFormat header.
                 * @member {(ntx.v2t.engine.AudioFormat.IHeader|null|undefined)}header
                 * @memberof ntx.v2t.engine.AudioFormat
                 * @instance
                 */
                AudioFormat.prototype.header = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                /**
                 * AudioFormat formats.
                 * @member {string|undefined} formats
                 * @memberof ntx.v2t.engine.AudioFormat
                 * @instance
                 */
                Object.defineProperty(AudioFormat.prototype, "formats", {
                    get: $util.oneOfGetter($oneOfFields = ["auto", "pcm", "header"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new AudioFormat instance using the specified properties.
                 * @function create
                 * @memberof ntx.v2t.engine.AudioFormat
                 * @static
                 * @param {ntx.v2t.engine.IAudioFormat=} [properties] Properties to set
                 * @returns {ntx.v2t.engine.AudioFormat} AudioFormat instance
                 */
                AudioFormat.create = function create(properties) {
                    return new AudioFormat(properties);
                };

                /**
                 * Encodes the specified AudioFormat message. Does not implicitly {@link ntx.v2t.engine.AudioFormat.verify|verify} messages.
                 * @function encode
                 * @memberof ntx.v2t.engine.AudioFormat
                 * @static
                 * @param {ntx.v2t.engine.IAudioFormat} message AudioFormat message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AudioFormat.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.auto != null && message.hasOwnProperty("auto"))
                        $root.ntx.v2t.engine.AudioFormat.AutoDetect.encode(message.auto, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.pcm != null && message.hasOwnProperty("pcm"))
                        $root.ntx.v2t.engine.AudioFormat.PCM.encode(message.pcm, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.header != null && message.hasOwnProperty("header"))
                        $root.ntx.v2t.engine.AudioFormat.Header.encode(message.header, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified AudioFormat message, length delimited. Does not implicitly {@link ntx.v2t.engine.AudioFormat.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof ntx.v2t.engine.AudioFormat
                 * @static
                 * @param {ntx.v2t.engine.IAudioFormat} message AudioFormat message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AudioFormat.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an AudioFormat message from the specified reader or buffer.
                 * @function decode
                 * @memberof ntx.v2t.engine.AudioFormat
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {ntx.v2t.engine.AudioFormat} AudioFormat
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AudioFormat.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ntx.v2t.engine.AudioFormat();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.auto = $root.ntx.v2t.engine.AudioFormat.AutoDetect.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.pcm = $root.ntx.v2t.engine.AudioFormat.PCM.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.header = $root.ntx.v2t.engine.AudioFormat.Header.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an AudioFormat message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof ntx.v2t.engine.AudioFormat
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {ntx.v2t.engine.AudioFormat} AudioFormat
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AudioFormat.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an AudioFormat message.
                 * @function verify
                 * @memberof ntx.v2t.engine.AudioFormat
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                AudioFormat.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.auto != null && message.hasOwnProperty("auto")) {
                        properties.formats = 1;
                        var error = $root.ntx.v2t.engine.AudioFormat.AutoDetect.verify(message.auto);
                        if (error)
                            return "auto." + error;
                    }
                    if (message.pcm != null && message.hasOwnProperty("pcm")) {
                        if (properties.formats === 1)
                            return "formats: multiple values";
                        properties.formats = 1;
                        error = $root.ntx.v2t.engine.AudioFormat.PCM.verify(message.pcm);
                        if (error)
                            return "pcm." + error;
                    }
                    if (message.header != null && message.hasOwnProperty("header")) {
                        if (properties.formats === 1)
                            return "formats: multiple values";
                        properties.formats = 1;
                        error = $root.ntx.v2t.engine.AudioFormat.Header.verify(message.header);
                        if (error)
                            return "header." + error;
                    }
                    return null;
                };

                /**
                 * Creates an AudioFormat message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof ntx.v2t.engine.AudioFormat
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {ntx.v2t.engine.AudioFormat} AudioFormat
                 */
                AudioFormat.fromObject = function fromObject(object) {
                    if (object instanceof $root.ntx.v2t.engine.AudioFormat)
                        return object;
                    var message = new $root.ntx.v2t.engine.AudioFormat();
                    if (object.auto != null) {
                        if (typeof object.auto !== "object")
                            throw TypeError(".ntx.v2t.engine.AudioFormat.auto: object expected");
                        message.auto = $root.ntx.v2t.engine.AudioFormat.AutoDetect.fromObject(object.auto);
                    }
                    if (object.pcm != null) {
                        if (typeof object.pcm !== "object")
                            throw TypeError(".ntx.v2t.engine.AudioFormat.pcm: object expected");
                        message.pcm = $root.ntx.v2t.engine.AudioFormat.PCM.fromObject(object.pcm);
                    }
                    if (object.header != null) {
                        if (typeof object.header !== "object")
                            throw TypeError(".ntx.v2t.engine.AudioFormat.header: object expected");
                        message.header = $root.ntx.v2t.engine.AudioFormat.Header.fromObject(object.header);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an AudioFormat message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof ntx.v2t.engine.AudioFormat
                 * @static
                 * @param {ntx.v2t.engine.AudioFormat} message AudioFormat
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                AudioFormat.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.auto != null && message.hasOwnProperty("auto")) {
                        object.auto = $root.ntx.v2t.engine.AudioFormat.AutoDetect.toObject(message.auto, options);
                        if (options.oneofs)
                            object.formats = "auto";
                    }
                    if (message.pcm != null && message.hasOwnProperty("pcm")) {
                        object.pcm = $root.ntx.v2t.engine.AudioFormat.PCM.toObject(message.pcm, options);
                        if (options.oneofs)
                            object.formats = "pcm";
                    }
                    if (message.header != null && message.hasOwnProperty("header")) {
                        object.header = $root.ntx.v2t.engine.AudioFormat.Header.toObject(message.header, options);
                        if (options.oneofs)
                            object.formats = "header";
                    }
                    return object;
                };

                /**
                 * Converts this AudioFormat to JSON.
                 * @function toJSON
                 * @memberof ntx.v2t.engine.AudioFormat
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                AudioFormat.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * ChannelLayout enum.
                 * @enum {string}
                 * @property {number} AUDIO_CHANNEL_LAYOUT_NONE=0 AUDIO_CHANNEL_LAYOUT_NONE value
                 * @property {number} AUDIO_CHANNEL_LAYOUT_MONO=1 AUDIO_CHANNEL_LAYOUT_MONO value
                 * @property {number} AUDIO_CHANNEL_LAYOUT_STEREO=2 AUDIO_CHANNEL_LAYOUT_STEREO value
                 */
                AudioFormat.ChannelLayout = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "AUDIO_CHANNEL_LAYOUT_NONE"] = 0;
                    values[valuesById[1] = "AUDIO_CHANNEL_LAYOUT_MONO"] = 1;
                    values[valuesById[2] = "AUDIO_CHANNEL_LAYOUT_STEREO"] = 2;
                    return values;
                })();

                /**
                 * SampleFormat enum.
                 * @enum {string}
                 * @property {number} AUDIO_SAMPLE_FORMAT_NONE=0 AUDIO_SAMPLE_FORMAT_NONE value
                 * @property {number} AUDIO_SAMPLE_FORMAT_ALAW=1 AUDIO_SAMPLE_FORMAT_ALAW value
                 * @property {number} AUDIO_SAMPLE_FORMAT_F32BE=2 AUDIO_SAMPLE_FORMAT_F32BE value
                 * @property {number} AUDIO_SAMPLE_FORMAT_F32LE=3 AUDIO_SAMPLE_FORMAT_F32LE value
                 * @property {number} AUDIO_SAMPLE_FORMAT_F64BE=4 AUDIO_SAMPLE_FORMAT_F64BE value
                 * @property {number} AUDIO_SAMPLE_FORMAT_F64LE=5 AUDIO_SAMPLE_FORMAT_F64LE value
                 * @property {number} AUDIO_SAMPLE_FORMAT_MULAW=6 AUDIO_SAMPLE_FORMAT_MULAW value
                 * @property {number} AUDIO_SAMPLE_FORMAT_S16BE=7 AUDIO_SAMPLE_FORMAT_S16BE value
                 * @property {number} AUDIO_SAMPLE_FORMAT_S16LE=8 AUDIO_SAMPLE_FORMAT_S16LE value
                 * @property {number} AUDIO_SAMPLE_FORMAT_S24BE=9 AUDIO_SAMPLE_FORMAT_S24BE value
                 * @property {number} AUDIO_SAMPLE_FORMAT_S24LE=10 AUDIO_SAMPLE_FORMAT_S24LE value
                 * @property {number} AUDIO_SAMPLE_FORMAT_S32BE=11 AUDIO_SAMPLE_FORMAT_S32BE value
                 * @property {number} AUDIO_SAMPLE_FORMAT_S32LE=12 AUDIO_SAMPLE_FORMAT_S32LE value
                 * @property {number} AUDIO_SAMPLE_FORMAT_S8=13 AUDIO_SAMPLE_FORMAT_S8 value
                 * @property {number} AUDIO_SAMPLE_FORMAT_U16BE=14 AUDIO_SAMPLE_FORMAT_U16BE value
                 * @property {number} AUDIO_SAMPLE_FORMAT_U16LE=15 AUDIO_SAMPLE_FORMAT_U16LE value
                 * @property {number} AUDIO_SAMPLE_FORMAT_U24BE=16 AUDIO_SAMPLE_FORMAT_U24BE value
                 * @property {number} AUDIO_SAMPLE_FORMAT_U24LE=17 AUDIO_SAMPLE_FORMAT_U24LE value
                 * @property {number} AUDIO_SAMPLE_FORMAT_U32BE=18 AUDIO_SAMPLE_FORMAT_U32BE value
                 * @property {number} AUDIO_SAMPLE_FORMAT_U32LE=19 AUDIO_SAMPLE_FORMAT_U32LE value
                 * @property {number} AUDIO_SAMPLE_FORMAT_U8=20 AUDIO_SAMPLE_FORMAT_U8 value
                 */
                AudioFormat.SampleFormat = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "AUDIO_SAMPLE_FORMAT_NONE"] = 0;
                    values[valuesById[1] = "AUDIO_SAMPLE_FORMAT_ALAW"] = 1;
                    values[valuesById[2] = "AUDIO_SAMPLE_FORMAT_F32BE"] = 2;
                    values[valuesById[3] = "AUDIO_SAMPLE_FORMAT_F32LE"] = 3;
                    values[valuesById[4] = "AUDIO_SAMPLE_FORMAT_F64BE"] = 4;
                    values[valuesById[5] = "AUDIO_SAMPLE_FORMAT_F64LE"] = 5;
                    values[valuesById[6] = "AUDIO_SAMPLE_FORMAT_MULAW"] = 6;
                    values[valuesById[7] = "AUDIO_SAMPLE_FORMAT_S16BE"] = 7;
                    values[valuesById[8] = "AUDIO_SAMPLE_FORMAT_S16LE"] = 8;
                    values[valuesById[9] = "AUDIO_SAMPLE_FORMAT_S24BE"] = 9;
                    values[valuesById[10] = "AUDIO_SAMPLE_FORMAT_S24LE"] = 10;
                    values[valuesById[11] = "AUDIO_SAMPLE_FORMAT_S32BE"] = 11;
                    values[valuesById[12] = "AUDIO_SAMPLE_FORMAT_S32LE"] = 12;
                    values[valuesById[13] = "AUDIO_SAMPLE_FORMAT_S8"] = 13;
                    values[valuesById[14] = "AUDIO_SAMPLE_FORMAT_U16BE"] = 14;
                    values[valuesById[15] = "AUDIO_SAMPLE_FORMAT_U16LE"] = 15;
                    values[valuesById[16] = "AUDIO_SAMPLE_FORMAT_U24BE"] = 16;
                    values[valuesById[17] = "AUDIO_SAMPLE_FORMAT_U24LE"] = 17;
                    values[valuesById[18] = "AUDIO_SAMPLE_FORMAT_U32BE"] = 18;
                    values[valuesById[19] = "AUDIO_SAMPLE_FORMAT_U32LE"] = 19;
                    values[valuesById[20] = "AUDIO_SAMPLE_FORMAT_U8"] = 20;
                    return values;
                })();

                /**
                 * SampleRate enum.
                 * @enum {string}
                 * @property {number} AUDIO_SAMPLE_RATE_NONE=0 AUDIO_SAMPLE_RATE_NONE value
                 * @property {number} AUDIO_SAMPLE_RATE_8000=1 AUDIO_SAMPLE_RATE_8000 value
                 * @property {number} AUDIO_SAMPLE_RATE_16000=2 AUDIO_SAMPLE_RATE_16000 value
                 * @property {number} AUDIO_SAMPLE_RATE_32000=3 AUDIO_SAMPLE_RATE_32000 value
                 * @property {number} AUDIO_SAMPLE_RATE_48000=4 AUDIO_SAMPLE_RATE_48000 value
                 * @property {number} AUDIO_SAMPLE_RATE_96000=5 AUDIO_SAMPLE_RATE_96000 value
                 * @property {number} AUDIO_SAMPLE_RATE_11025=6 AUDIO_SAMPLE_RATE_11025 value
                 * @property {number} AUDIO_SAMPLE_RATE_22050=7 AUDIO_SAMPLE_RATE_22050 value
                 * @property {number} AUDIO_SAMPLE_RATE_44100=8 AUDIO_SAMPLE_RATE_44100 value
                 */
                AudioFormat.SampleRate = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "AUDIO_SAMPLE_RATE_NONE"] = 0;
                    values[valuesById[1] = "AUDIO_SAMPLE_RATE_8000"] = 1;
                    values[valuesById[2] = "AUDIO_SAMPLE_RATE_16000"] = 2;
                    values[valuesById[3] = "AUDIO_SAMPLE_RATE_32000"] = 3;
                    values[valuesById[4] = "AUDIO_SAMPLE_RATE_48000"] = 4;
                    values[valuesById[5] = "AUDIO_SAMPLE_RATE_96000"] = 5;
                    values[valuesById[6] = "AUDIO_SAMPLE_RATE_11025"] = 6;
                    values[valuesById[7] = "AUDIO_SAMPLE_RATE_22050"] = 7;
                    values[valuesById[8] = "AUDIO_SAMPLE_RATE_44100"] = 8;
                    return values;
                })();

                AudioFormat.AutoDetect = (function() {

                    /**
                     * Properties of an AutoDetect.
                     * @memberof ntx.v2t.engine.AudioFormat
                     * @interface IAutoDetect
                     * @property {number} [probeSizeBytes] AutoDetect probeSizeBytes
                     */

                    /**
                     * Constructs a new AutoDetect.
                     * @memberof ntx.v2t.engine.AudioFormat
                     * @classdesc Represents an AutoDetect.
                     * @constructor
                     * @param {ntx.v2t.engine.AudioFormat.IAutoDetect=} [properties] Properties to set
                     */
                    function AutoDetect(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * AutoDetect probeSizeBytes.
                     * @member {number}probeSizeBytes
                     * @memberof ntx.v2t.engine.AudioFormat.AutoDetect
                     * @instance
                     */
                    AutoDetect.prototype.probeSizeBytes = 0;

                    /**
                     * Creates a new AutoDetect instance using the specified properties.
                     * @function create
                     * @memberof ntx.v2t.engine.AudioFormat.AutoDetect
                     * @static
                     * @param {ntx.v2t.engine.AudioFormat.IAutoDetect=} [properties] Properties to set
                     * @returns {ntx.v2t.engine.AudioFormat.AutoDetect} AutoDetect instance
                     */
                    AutoDetect.create = function create(properties) {
                        return new AutoDetect(properties);
                    };

                    /**
                     * Encodes the specified AutoDetect message. Does not implicitly {@link ntx.v2t.engine.AudioFormat.AutoDetect.verify|verify} messages.
                     * @function encode
                     * @memberof ntx.v2t.engine.AudioFormat.AutoDetect
                     * @static
                     * @param {ntx.v2t.engine.AudioFormat.IAutoDetect} message AutoDetect message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    AutoDetect.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.probeSizeBytes != null && message.hasOwnProperty("probeSizeBytes"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.probeSizeBytes);
                        return writer;
                    };

                    /**
                     * Encodes the specified AutoDetect message, length delimited. Does not implicitly {@link ntx.v2t.engine.AudioFormat.AutoDetect.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof ntx.v2t.engine.AudioFormat.AutoDetect
                     * @static
                     * @param {ntx.v2t.engine.AudioFormat.IAutoDetect} message AutoDetect message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    AutoDetect.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an AutoDetect message from the specified reader or buffer.
                     * @function decode
                     * @memberof ntx.v2t.engine.AudioFormat.AutoDetect
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {ntx.v2t.engine.AudioFormat.AutoDetect} AutoDetect
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    AutoDetect.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ntx.v2t.engine.AudioFormat.AutoDetect();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.probeSizeBytes = reader.uint32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an AutoDetect message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof ntx.v2t.engine.AudioFormat.AutoDetect
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {ntx.v2t.engine.AudioFormat.AutoDetect} AutoDetect
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    AutoDetect.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an AutoDetect message.
                     * @function verify
                     * @memberof ntx.v2t.engine.AudioFormat.AutoDetect
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    AutoDetect.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.probeSizeBytes != null && message.hasOwnProperty("probeSizeBytes"))
                            if (!$util.isInteger(message.probeSizeBytes))
                                return "probeSizeBytes: integer expected";
                        return null;
                    };

                    /**
                     * Creates an AutoDetect message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof ntx.v2t.engine.AudioFormat.AutoDetect
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {ntx.v2t.engine.AudioFormat.AutoDetect} AutoDetect
                     */
                    AutoDetect.fromObject = function fromObject(object) {
                        if (object instanceof $root.ntx.v2t.engine.AudioFormat.AutoDetect)
                            return object;
                        var message = new $root.ntx.v2t.engine.AudioFormat.AutoDetect();
                        if (object.probeSizeBytes != null)
                            message.probeSizeBytes = object.probeSizeBytes >>> 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from an AutoDetect message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof ntx.v2t.engine.AudioFormat.AutoDetect
                     * @static
                     * @param {ntx.v2t.engine.AudioFormat.AutoDetect} message AutoDetect
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    AutoDetect.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.probeSizeBytes = 0;
                        if (message.probeSizeBytes != null && message.hasOwnProperty("probeSizeBytes"))
                            object.probeSizeBytes = message.probeSizeBytes;
                        return object;
                    };

                    /**
                     * Converts this AutoDetect to JSON.
                     * @function toJSON
                     * @memberof ntx.v2t.engine.AudioFormat.AutoDetect
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    AutoDetect.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return AutoDetect;
                })();

                AudioFormat.PCM = (function() {

                    /**
                     * Properties of a PCM.
                     * @memberof ntx.v2t.engine.AudioFormat
                     * @interface IPCM
                     * @property {ntx.v2t.engine.AudioFormat.SampleFormat} [sampleFormat] PCM sampleFormat
                     * @property {ntx.v2t.engine.AudioFormat.SampleRate} [sampleRate] PCM sampleRate
                     * @property {ntx.v2t.engine.AudioFormat.ChannelLayout} [channelLayout] PCM channelLayout
                     */

                    /**
                     * Constructs a new PCM.
                     * @memberof ntx.v2t.engine.AudioFormat
                     * @classdesc Represents a PCM.
                     * @constructor
                     * @param {ntx.v2t.engine.AudioFormat.IPCM=} [properties] Properties to set
                     */
                    function PCM(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * PCM sampleFormat.
                     * @member {ntx.v2t.engine.AudioFormat.SampleFormat}sampleFormat
                     * @memberof ntx.v2t.engine.AudioFormat.PCM
                     * @instance
                     */
                    PCM.prototype.sampleFormat = 0;

                    /**
                     * PCM sampleRate.
                     * @member {ntx.v2t.engine.AudioFormat.SampleRate}sampleRate
                     * @memberof ntx.v2t.engine.AudioFormat.PCM
                     * @instance
                     */
                    PCM.prototype.sampleRate = 0;

                    /**
                     * PCM channelLayout.
                     * @member {ntx.v2t.engine.AudioFormat.ChannelLayout}channelLayout
                     * @memberof ntx.v2t.engine.AudioFormat.PCM
                     * @instance
                     */
                    PCM.prototype.channelLayout = 0;

                    /**
                     * Creates a new PCM instance using the specified properties.
                     * @function create
                     * @memberof ntx.v2t.engine.AudioFormat.PCM
                     * @static
                     * @param {ntx.v2t.engine.AudioFormat.IPCM=} [properties] Properties to set
                     * @returns {ntx.v2t.engine.AudioFormat.PCM} PCM instance
                     */
                    PCM.create = function create(properties) {
                        return new PCM(properties);
                    };

                    /**
                     * Encodes the specified PCM message. Does not implicitly {@link ntx.v2t.engine.AudioFormat.PCM.verify|verify} messages.
                     * @function encode
                     * @memberof ntx.v2t.engine.AudioFormat.PCM
                     * @static
                     * @param {ntx.v2t.engine.AudioFormat.IPCM} message PCM message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PCM.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.sampleFormat != null && message.hasOwnProperty("sampleFormat"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.sampleFormat);
                        if (message.sampleRate != null && message.hasOwnProperty("sampleRate"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.sampleRate);
                        if (message.channelLayout != null && message.hasOwnProperty("channelLayout"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.channelLayout);
                        return writer;
                    };

                    /**
                     * Encodes the specified PCM message, length delimited. Does not implicitly {@link ntx.v2t.engine.AudioFormat.PCM.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof ntx.v2t.engine.AudioFormat.PCM
                     * @static
                     * @param {ntx.v2t.engine.AudioFormat.IPCM} message PCM message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PCM.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a PCM message from the specified reader or buffer.
                     * @function decode
                     * @memberof ntx.v2t.engine.AudioFormat.PCM
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {ntx.v2t.engine.AudioFormat.PCM} PCM
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PCM.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ntx.v2t.engine.AudioFormat.PCM();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.sampleFormat = reader.int32();
                                break;
                            case 2:
                                message.sampleRate = reader.int32();
                                break;
                            case 3:
                                message.channelLayout = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a PCM message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof ntx.v2t.engine.AudioFormat.PCM
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {ntx.v2t.engine.AudioFormat.PCM} PCM
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PCM.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a PCM message.
                     * @function verify
                     * @memberof ntx.v2t.engine.AudioFormat.PCM
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PCM.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.sampleFormat != null && message.hasOwnProperty("sampleFormat"))
                            switch (message.sampleFormat) {
                            default:
                                return "sampleFormat: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                            case 8:
                            case 9:
                            case 10:
                            case 11:
                            case 12:
                            case 13:
                            case 14:
                            case 15:
                            case 16:
                            case 17:
                            case 18:
                            case 19:
                            case 20:
                                break;
                            }
                        if (message.sampleRate != null && message.hasOwnProperty("sampleRate"))
                            switch (message.sampleRate) {
                            default:
                                return "sampleRate: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                            case 8:
                                break;
                            }
                        if (message.channelLayout != null && message.hasOwnProperty("channelLayout"))
                            switch (message.channelLayout) {
                            default:
                                return "channelLayout: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                                break;
                            }
                        return null;
                    };

                    /**
                     * Creates a PCM message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof ntx.v2t.engine.AudioFormat.PCM
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {ntx.v2t.engine.AudioFormat.PCM} PCM
                     */
                    PCM.fromObject = function fromObject(object) {
                        if (object instanceof $root.ntx.v2t.engine.AudioFormat.PCM)
                            return object;
                        var message = new $root.ntx.v2t.engine.AudioFormat.PCM();
                        switch (object.sampleFormat) {
                        case "AUDIO_SAMPLE_FORMAT_NONE":
                        case 0:
                            message.sampleFormat = 0;
                            break;
                        case "AUDIO_SAMPLE_FORMAT_ALAW":
                        case 1:
                            message.sampleFormat = 1;
                            break;
                        case "AUDIO_SAMPLE_FORMAT_F32BE":
                        case 2:
                            message.sampleFormat = 2;
                            break;
                        case "AUDIO_SAMPLE_FORMAT_F32LE":
                        case 3:
                            message.sampleFormat = 3;
                            break;
                        case "AUDIO_SAMPLE_FORMAT_F64BE":
                        case 4:
                            message.sampleFormat = 4;
                            break;
                        case "AUDIO_SAMPLE_FORMAT_F64LE":
                        case 5:
                            message.sampleFormat = 5;
                            break;
                        case "AUDIO_SAMPLE_FORMAT_MULAW":
                        case 6:
                            message.sampleFormat = 6;
                            break;
                        case "AUDIO_SAMPLE_FORMAT_S16BE":
                        case 7:
                            message.sampleFormat = 7;
                            break;
                        case "AUDIO_SAMPLE_FORMAT_S16LE":
                        case 8:
                            message.sampleFormat = 8;
                            break;
                        case "AUDIO_SAMPLE_FORMAT_S24BE":
                        case 9:
                            message.sampleFormat = 9;
                            break;
                        case "AUDIO_SAMPLE_FORMAT_S24LE":
                        case 10:
                            message.sampleFormat = 10;
                            break;
                        case "AUDIO_SAMPLE_FORMAT_S32BE":
                        case 11:
                            message.sampleFormat = 11;
                            break;
                        case "AUDIO_SAMPLE_FORMAT_S32LE":
                        case 12:
                            message.sampleFormat = 12;
                            break;
                        case "AUDIO_SAMPLE_FORMAT_S8":
                        case 13:
                            message.sampleFormat = 13;
                            break;
                        case "AUDIO_SAMPLE_FORMAT_U16BE":
                        case 14:
                            message.sampleFormat = 14;
                            break;
                        case "AUDIO_SAMPLE_FORMAT_U16LE":
                        case 15:
                            message.sampleFormat = 15;
                            break;
                        case "AUDIO_SAMPLE_FORMAT_U24BE":
                        case 16:
                            message.sampleFormat = 16;
                            break;
                        case "AUDIO_SAMPLE_FORMAT_U24LE":
                        case 17:
                            message.sampleFormat = 17;
                            break;
                        case "AUDIO_SAMPLE_FORMAT_U32BE":
                        case 18:
                            message.sampleFormat = 18;
                            break;
                        case "AUDIO_SAMPLE_FORMAT_U32LE":
                        case 19:
                            message.sampleFormat = 19;
                            break;
                        case "AUDIO_SAMPLE_FORMAT_U8":
                        case 20:
                            message.sampleFormat = 20;
                            break;
                        }
                        switch (object.sampleRate) {
                        case "AUDIO_SAMPLE_RATE_NONE":
                        case 0:
                            message.sampleRate = 0;
                            break;
                        case "AUDIO_SAMPLE_RATE_8000":
                        case 1:
                            message.sampleRate = 1;
                            break;
                        case "AUDIO_SAMPLE_RATE_16000":
                        case 2:
                            message.sampleRate = 2;
                            break;
                        case "AUDIO_SAMPLE_RATE_32000":
                        case 3:
                            message.sampleRate = 3;
                            break;
                        case "AUDIO_SAMPLE_RATE_48000":
                        case 4:
                            message.sampleRate = 4;
                            break;
                        case "AUDIO_SAMPLE_RATE_96000":
                        case 5:
                            message.sampleRate = 5;
                            break;
                        case "AUDIO_SAMPLE_RATE_11025":
                        case 6:
                            message.sampleRate = 6;
                            break;
                        case "AUDIO_SAMPLE_RATE_22050":
                        case 7:
                            message.sampleRate = 7;
                            break;
                        case "AUDIO_SAMPLE_RATE_44100":
                        case 8:
                            message.sampleRate = 8;
                            break;
                        }
                        switch (object.channelLayout) {
                        case "AUDIO_CHANNEL_LAYOUT_NONE":
                        case 0:
                            message.channelLayout = 0;
                            break;
                        case "AUDIO_CHANNEL_LAYOUT_MONO":
                        case 1:
                            message.channelLayout = 1;
                            break;
                        case "AUDIO_CHANNEL_LAYOUT_STEREO":
                        case 2:
                            message.channelLayout = 2;
                            break;
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a PCM message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof ntx.v2t.engine.AudioFormat.PCM
                     * @static
                     * @param {ntx.v2t.engine.AudioFormat.PCM} message PCM
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PCM.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.sampleFormat = options.enums === String ? "AUDIO_SAMPLE_FORMAT_NONE" : 0;
                            object.sampleRate = options.enums === String ? "AUDIO_SAMPLE_RATE_NONE" : 0;
                            object.channelLayout = options.enums === String ? "AUDIO_CHANNEL_LAYOUT_NONE" : 0;
                        }
                        if (message.sampleFormat != null && message.hasOwnProperty("sampleFormat"))
                            object.sampleFormat = options.enums === String ? $root.ntx.v2t.engine.AudioFormat.SampleFormat[message.sampleFormat] : message.sampleFormat;
                        if (message.sampleRate != null && message.hasOwnProperty("sampleRate"))
                            object.sampleRate = options.enums === String ? $root.ntx.v2t.engine.AudioFormat.SampleRate[message.sampleRate] : message.sampleRate;
                        if (message.channelLayout != null && message.hasOwnProperty("channelLayout"))
                            object.channelLayout = options.enums === String ? $root.ntx.v2t.engine.AudioFormat.ChannelLayout[message.channelLayout] : message.channelLayout;
                        return object;
                    };

                    /**
                     * Converts this PCM to JSON.
                     * @function toJSON
                     * @memberof ntx.v2t.engine.AudioFormat.PCM
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PCM.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return PCM;
                })();

                AudioFormat.Header = (function() {

                    /**
                     * Properties of a Header.
                     * @memberof ntx.v2t.engine.AudioFormat
                     * @interface IHeader
                     * @property {Uint8Array} [header] Header header
                     */

                    /**
                     * Constructs a new Header.
                     * @memberof ntx.v2t.engine.AudioFormat
                     * @classdesc Represents a Header.
                     * @constructor
                     * @param {ntx.v2t.engine.AudioFormat.IHeader=} [properties] Properties to set
                     */
                    function Header(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Header header.
                     * @member {Uint8Array}header
                     * @memberof ntx.v2t.engine.AudioFormat.Header
                     * @instance
                     */
                    Header.prototype.header = $util.newBuffer([]);

                    /**
                     * Creates a new Header instance using the specified properties.
                     * @function create
                     * @memberof ntx.v2t.engine.AudioFormat.Header
                     * @static
                     * @param {ntx.v2t.engine.AudioFormat.IHeader=} [properties] Properties to set
                     * @returns {ntx.v2t.engine.AudioFormat.Header} Header instance
                     */
                    Header.create = function create(properties) {
                        return new Header(properties);
                    };

                    /**
                     * Encodes the specified Header message. Does not implicitly {@link ntx.v2t.engine.AudioFormat.Header.verify|verify} messages.
                     * @function encode
                     * @memberof ntx.v2t.engine.AudioFormat.Header
                     * @static
                     * @param {ntx.v2t.engine.AudioFormat.IHeader} message Header message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Header.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.header != null && message.hasOwnProperty("header"))
                            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.header);
                        return writer;
                    };

                    /**
                     * Encodes the specified Header message, length delimited. Does not implicitly {@link ntx.v2t.engine.AudioFormat.Header.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof ntx.v2t.engine.AudioFormat.Header
                     * @static
                     * @param {ntx.v2t.engine.AudioFormat.IHeader} message Header message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Header.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Header message from the specified reader or buffer.
                     * @function decode
                     * @memberof ntx.v2t.engine.AudioFormat.Header
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {ntx.v2t.engine.AudioFormat.Header} Header
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Header.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ntx.v2t.engine.AudioFormat.Header();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.header = reader.bytes();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Header message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof ntx.v2t.engine.AudioFormat.Header
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {ntx.v2t.engine.AudioFormat.Header} Header
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Header.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Header message.
                     * @function verify
                     * @memberof ntx.v2t.engine.AudioFormat.Header
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Header.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.header != null && message.hasOwnProperty("header"))
                            if (!(message.header && typeof message.header.length === "number" || $util.isString(message.header)))
                                return "header: buffer expected";
                        return null;
                    };

                    /**
                     * Creates a Header message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof ntx.v2t.engine.AudioFormat.Header
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {ntx.v2t.engine.AudioFormat.Header} Header
                     */
                    Header.fromObject = function fromObject(object) {
                        if (object instanceof $root.ntx.v2t.engine.AudioFormat.Header)
                            return object;
                        var message = new $root.ntx.v2t.engine.AudioFormat.Header();
                        if (object.header != null)
                            if (typeof object.header === "string")
                                $util.base64.decode(object.header, message.header = $util.newBuffer($util.base64.length(object.header)), 0);
                            else if (object.header.length)
                                message.header = object.header;
                        return message;
                    };

                    /**
                     * Creates a plain object from a Header message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof ntx.v2t.engine.AudioFormat.Header
                     * @static
                     * @param {ntx.v2t.engine.AudioFormat.Header} message Header
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Header.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.header = options.bytes === String ? "" : [];
                        if (message.header != null && message.hasOwnProperty("header"))
                            object.header = options.bytes === String ? $util.base64.encode(message.header, 0, message.header.length) : options.bytes === Array ? Array.prototype.slice.call(message.header) : message.header;
                        return object;
                    };

                    /**
                     * Converts this Header to JSON.
                     * @function toJSON
                     * @memberof ntx.v2t.engine.AudioFormat.Header
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Header.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Header;
                })();

                return AudioFormat;
            })();

            engine.EngineContext = (function() {

                /**
                 * Properties of an EngineContext.
                 * @memberof ntx.v2t.engine
                 * @interface IEngineContext
                 * @property {ntx.v2t.engine.IAudioFormat} [audioFormat] EngineContext audioFormat
                 * @property {ntx.v2t.engine.EngineContext.AudioChannel} [audioChannel] EngineContext audioChannel
                 * @property {ntx.v2t.engine.EngineContext.IVADConfig} [vad] EngineContext vad
                 * @property {ntx.v2t.engine.EngineContext.IV2TConfig} [v2t] EngineContext v2t
                 * @property {ntx.v2t.engine.EngineContext.IPPCConfig} [ppc] EngineContext ppc
                 */

                /**
                 * Constructs a new EngineContext.
                 * @memberof ntx.v2t.engine
                 * @classdesc Represents an EngineContext.
                 * @constructor
                 * @param {ntx.v2t.engine.IEngineContext=} [properties] Properties to set
                 */
                function EngineContext(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * EngineContext audioFormat.
                 * @member {(ntx.v2t.engine.IAudioFormat|null|undefined)}audioFormat
                 * @memberof ntx.v2t.engine.EngineContext
                 * @instance
                 */
                EngineContext.prototype.audioFormat = null;

                /**
                 * EngineContext audioChannel.
                 * @member {ntx.v2t.engine.EngineContext.AudioChannel}audioChannel
                 * @memberof ntx.v2t.engine.EngineContext
                 * @instance
                 */
                EngineContext.prototype.audioChannel = 0;

                /**
                 * EngineContext vad.
                 * @member {(ntx.v2t.engine.EngineContext.IVADConfig|null|undefined)}vad
                 * @memberof ntx.v2t.engine.EngineContext
                 * @instance
                 */
                EngineContext.prototype.vad = null;

                /**
                 * EngineContext v2t.
                 * @member {(ntx.v2t.engine.EngineContext.IV2TConfig|null|undefined)}v2t
                 * @memberof ntx.v2t.engine.EngineContext
                 * @instance
                 */
                EngineContext.prototype.v2t = null;

                /**
                 * EngineContext ppc.
                 * @member {(ntx.v2t.engine.EngineContext.IPPCConfig|null|undefined)}ppc
                 * @memberof ntx.v2t.engine.EngineContext
                 * @instance
                 */
                EngineContext.prototype.ppc = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                /**
                 * EngineContext config.
                 * @member {string|undefined} config
                 * @memberof ntx.v2t.engine.EngineContext
                 * @instance
                 */
                Object.defineProperty(EngineContext.prototype, "config", {
                    get: $util.oneOfGetter($oneOfFields = ["vad", "v2t", "ppc"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new EngineContext instance using the specified properties.
                 * @function create
                 * @memberof ntx.v2t.engine.EngineContext
                 * @static
                 * @param {ntx.v2t.engine.IEngineContext=} [properties] Properties to set
                 * @returns {ntx.v2t.engine.EngineContext} EngineContext instance
                 */
                EngineContext.create = function create(properties) {
                    return new EngineContext(properties);
                };

                /**
                 * Encodes the specified EngineContext message. Does not implicitly {@link ntx.v2t.engine.EngineContext.verify|verify} messages.
                 * @function encode
                 * @memberof ntx.v2t.engine.EngineContext
                 * @static
                 * @param {ntx.v2t.engine.IEngineContext} message EngineContext message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EngineContext.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.audioFormat != null && message.hasOwnProperty("audioFormat"))
                        $root.ntx.v2t.engine.AudioFormat.encode(message.audioFormat, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.audioChannel != null && message.hasOwnProperty("audioChannel"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.audioChannel);
                    if (message.vad != null && message.hasOwnProperty("vad"))
                        $root.ntx.v2t.engine.EngineContext.VADConfig.encode(message.vad, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.v2t != null && message.hasOwnProperty("v2t"))
                        $root.ntx.v2t.engine.EngineContext.V2TConfig.encode(message.v2t, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.ppc != null && message.hasOwnProperty("ppc"))
                        $root.ntx.v2t.engine.EngineContext.PPCConfig.encode(message.ppc, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified EngineContext message, length delimited. Does not implicitly {@link ntx.v2t.engine.EngineContext.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof ntx.v2t.engine.EngineContext
                 * @static
                 * @param {ntx.v2t.engine.IEngineContext} message EngineContext message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EngineContext.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an EngineContext message from the specified reader or buffer.
                 * @function decode
                 * @memberof ntx.v2t.engine.EngineContext
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {ntx.v2t.engine.EngineContext} EngineContext
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EngineContext.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ntx.v2t.engine.EngineContext();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.audioFormat = $root.ntx.v2t.engine.AudioFormat.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.audioChannel = reader.int32();
                            break;
                        case 3:
                            message.vad = $root.ntx.v2t.engine.EngineContext.VADConfig.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.v2t = $root.ntx.v2t.engine.EngineContext.V2TConfig.decode(reader, reader.uint32());
                            break;
                        case 9:
                            message.ppc = $root.ntx.v2t.engine.EngineContext.PPCConfig.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an EngineContext message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof ntx.v2t.engine.EngineContext
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {ntx.v2t.engine.EngineContext} EngineContext
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EngineContext.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an EngineContext message.
                 * @function verify
                 * @memberof ntx.v2t.engine.EngineContext
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EngineContext.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.audioFormat != null && message.hasOwnProperty("audioFormat")) {
                        var error = $root.ntx.v2t.engine.AudioFormat.verify(message.audioFormat);
                        if (error)
                            return "audioFormat." + error;
                    }
                    if (message.audioChannel != null && message.hasOwnProperty("audioChannel"))
                        switch (message.audioChannel) {
                        default:
                            return "audioChannel: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.vad != null && message.hasOwnProperty("vad")) {
                        properties.config = 1;
                        error = $root.ntx.v2t.engine.EngineContext.VADConfig.verify(message.vad);
                        if (error)
                            return "vad." + error;
                    }
                    if (message.v2t != null && message.hasOwnProperty("v2t")) {
                        if (properties.config === 1)
                            return "config: multiple values";
                        properties.config = 1;
                        error = $root.ntx.v2t.engine.EngineContext.V2TConfig.verify(message.v2t);
                        if (error)
                            return "v2t." + error;
                    }
                    if (message.ppc != null && message.hasOwnProperty("ppc")) {
                        if (properties.config === 1)
                            return "config: multiple values";
                        properties.config = 1;
                        error = $root.ntx.v2t.engine.EngineContext.PPCConfig.verify(message.ppc);
                        if (error)
                            return "ppc." + error;
                    }
                    return null;
                };

                /**
                 * Creates an EngineContext message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof ntx.v2t.engine.EngineContext
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {ntx.v2t.engine.EngineContext} EngineContext
                 */
                EngineContext.fromObject = function fromObject(object) {
                    if (object instanceof $root.ntx.v2t.engine.EngineContext)
                        return object;
                    var message = new $root.ntx.v2t.engine.EngineContext();
                    if (object.audioFormat != null) {
                        if (typeof object.audioFormat !== "object")
                            throw TypeError(".ntx.v2t.engine.EngineContext.audioFormat: object expected");
                        message.audioFormat = $root.ntx.v2t.engine.AudioFormat.fromObject(object.audioFormat);
                    }
                    switch (object.audioChannel) {
                    case "AUDIO_CHANNEL_DOWNMIX":
                    case 0:
                        message.audioChannel = 0;
                        break;
                    case "AUDIO_CHANNEL_LEFT":
                    case 1:
                        message.audioChannel = 1;
                        break;
                    case "AUDIO_CHANNEL_RIGHT":
                    case 2:
                        message.audioChannel = 2;
                        break;
                    }
                    if (object.vad != null) {
                        if (typeof object.vad !== "object")
                            throw TypeError(".ntx.v2t.engine.EngineContext.vad: object expected");
                        message.vad = $root.ntx.v2t.engine.EngineContext.VADConfig.fromObject(object.vad);
                    }
                    if (object.v2t != null) {
                        if (typeof object.v2t !== "object")
                            throw TypeError(".ntx.v2t.engine.EngineContext.v2t: object expected");
                        message.v2t = $root.ntx.v2t.engine.EngineContext.V2TConfig.fromObject(object.v2t);
                    }
                    if (object.ppc != null) {
                        if (typeof object.ppc !== "object")
                            throw TypeError(".ntx.v2t.engine.EngineContext.ppc: object expected");
                        message.ppc = $root.ntx.v2t.engine.EngineContext.PPCConfig.fromObject(object.ppc);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an EngineContext message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof ntx.v2t.engine.EngineContext
                 * @static
                 * @param {ntx.v2t.engine.EngineContext} message EngineContext
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EngineContext.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.audioFormat = null;
                        object.audioChannel = options.enums === String ? "AUDIO_CHANNEL_DOWNMIX" : 0;
                    }
                    if (message.audioFormat != null && message.hasOwnProperty("audioFormat"))
                        object.audioFormat = $root.ntx.v2t.engine.AudioFormat.toObject(message.audioFormat, options);
                    if (message.audioChannel != null && message.hasOwnProperty("audioChannel"))
                        object.audioChannel = options.enums === String ? $root.ntx.v2t.engine.EngineContext.AudioChannel[message.audioChannel] : message.audioChannel;
                    if (message.vad != null && message.hasOwnProperty("vad")) {
                        object.vad = $root.ntx.v2t.engine.EngineContext.VADConfig.toObject(message.vad, options);
                        if (options.oneofs)
                            object.config = "vad";
                    }
                    if (message.v2t != null && message.hasOwnProperty("v2t")) {
                        object.v2t = $root.ntx.v2t.engine.EngineContext.V2TConfig.toObject(message.v2t, options);
                        if (options.oneofs)
                            object.config = "v2t";
                    }
                    if (message.ppc != null && message.hasOwnProperty("ppc")) {
                        object.ppc = $root.ntx.v2t.engine.EngineContext.PPCConfig.toObject(message.ppc, options);
                        if (options.oneofs)
                            object.config = "ppc";
                    }
                    return object;
                };

                /**
                 * Converts this EngineContext to JSON.
                 * @function toJSON
                 * @memberof ntx.v2t.engine.EngineContext
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EngineContext.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                EngineContext.VADConfig = (function() {

                    /**
                     * Properties of a VADConfig.
                     * @memberof ntx.v2t.engine.EngineContext
                     * @interface IVADConfig
                     */

                    /**
                     * Constructs a new VADConfig.
                     * @memberof ntx.v2t.engine.EngineContext
                     * @classdesc Represents a VADConfig.
                     * @constructor
                     * @param {ntx.v2t.engine.EngineContext.IVADConfig=} [properties] Properties to set
                     */
                    function VADConfig(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Creates a new VADConfig instance using the specified properties.
                     * @function create
                     * @memberof ntx.v2t.engine.EngineContext.VADConfig
                     * @static
                     * @param {ntx.v2t.engine.EngineContext.IVADConfig=} [properties] Properties to set
                     * @returns {ntx.v2t.engine.EngineContext.VADConfig} VADConfig instance
                     */
                    VADConfig.create = function create(properties) {
                        return new VADConfig(properties);
                    };

                    /**
                     * Encodes the specified VADConfig message. Does not implicitly {@link ntx.v2t.engine.EngineContext.VADConfig.verify|verify} messages.
                     * @function encode
                     * @memberof ntx.v2t.engine.EngineContext.VADConfig
                     * @static
                     * @param {ntx.v2t.engine.EngineContext.IVADConfig} message VADConfig message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    VADConfig.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };

                    /**
                     * Encodes the specified VADConfig message, length delimited. Does not implicitly {@link ntx.v2t.engine.EngineContext.VADConfig.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof ntx.v2t.engine.EngineContext.VADConfig
                     * @static
                     * @param {ntx.v2t.engine.EngineContext.IVADConfig} message VADConfig message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    VADConfig.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a VADConfig message from the specified reader or buffer.
                     * @function decode
                     * @memberof ntx.v2t.engine.EngineContext.VADConfig
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {ntx.v2t.engine.EngineContext.VADConfig} VADConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    VADConfig.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ntx.v2t.engine.EngineContext.VADConfig();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a VADConfig message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof ntx.v2t.engine.EngineContext.VADConfig
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {ntx.v2t.engine.EngineContext.VADConfig} VADConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    VADConfig.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a VADConfig message.
                     * @function verify
                     * @memberof ntx.v2t.engine.EngineContext.VADConfig
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    VADConfig.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };

                    /**
                     * Creates a VADConfig message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof ntx.v2t.engine.EngineContext.VADConfig
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {ntx.v2t.engine.EngineContext.VADConfig} VADConfig
                     */
                    VADConfig.fromObject = function fromObject(object) {
                        if (object instanceof $root.ntx.v2t.engine.EngineContext.VADConfig)
                            return object;
                        return new $root.ntx.v2t.engine.EngineContext.VADConfig();
                    };

                    /**
                     * Creates a plain object from a VADConfig message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof ntx.v2t.engine.EngineContext.VADConfig
                     * @static
                     * @param {ntx.v2t.engine.EngineContext.VADConfig} message VADConfig
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    VADConfig.toObject = function toObject() {
                        return {};
                    };

                    /**
                     * Converts this VADConfig to JSON.
                     * @function toJSON
                     * @memberof ntx.v2t.engine.EngineContext.VADConfig
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    VADConfig.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return VADConfig;
                })();

                EngineContext.V2TConfig = (function() {

                    /**
                     * Properties of a V2TConfig.
                     * @memberof ntx.v2t.engine.EngineContext
                     * @interface IV2TConfig
                     * @property {ntx.v2t.engine.EngineContext.IVADConfig} [withVAD] V2TConfig withVAD
                     * @property {ntx.v2t.engine.EngineContext.IPPCConfig} [withPPC] V2TConfig withPPC
                     * @property {ntx.v2t.engine.ILexicon} [withLexicon] V2TConfig withLexicon
                     */

                    /**
                     * Constructs a new V2TConfig.
                     * @memberof ntx.v2t.engine.EngineContext
                     * @classdesc Represents a V2TConfig.
                     * @constructor
                     * @param {ntx.v2t.engine.EngineContext.IV2TConfig=} [properties] Properties to set
                     */
                    function V2TConfig(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * V2TConfig withVAD.
                     * @member {(ntx.v2t.engine.EngineContext.IVADConfig|null|undefined)}withVAD
                     * @memberof ntx.v2t.engine.EngineContext.V2TConfig
                     * @instance
                     */
                    V2TConfig.prototype.withVAD = null;

                    /**
                     * V2TConfig withPPC.
                     * @member {(ntx.v2t.engine.EngineContext.IPPCConfig|null|undefined)}withPPC
                     * @memberof ntx.v2t.engine.EngineContext.V2TConfig
                     * @instance
                     */
                    V2TConfig.prototype.withPPC = null;

                    /**
                     * V2TConfig withLexicon.
                     * @member {(ntx.v2t.engine.ILexicon|null|undefined)}withLexicon
                     * @memberof ntx.v2t.engine.EngineContext.V2TConfig
                     * @instance
                     */
                    V2TConfig.prototype.withLexicon = null;

                    /**
                     * Creates a new V2TConfig instance using the specified properties.
                     * @function create
                     * @memberof ntx.v2t.engine.EngineContext.V2TConfig
                     * @static
                     * @param {ntx.v2t.engine.EngineContext.IV2TConfig=} [properties] Properties to set
                     * @returns {ntx.v2t.engine.EngineContext.V2TConfig} V2TConfig instance
                     */
                    V2TConfig.create = function create(properties) {
                        return new V2TConfig(properties);
                    };

                    /**
                     * Encodes the specified V2TConfig message. Does not implicitly {@link ntx.v2t.engine.EngineContext.V2TConfig.verify|verify} messages.
                     * @function encode
                     * @memberof ntx.v2t.engine.EngineContext.V2TConfig
                     * @static
                     * @param {ntx.v2t.engine.EngineContext.IV2TConfig} message V2TConfig message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    V2TConfig.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.withVAD != null && message.hasOwnProperty("withVAD"))
                            $root.ntx.v2t.engine.EngineContext.VADConfig.encode(message.withVAD, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.withPPC != null && message.hasOwnProperty("withPPC"))
                            $root.ntx.v2t.engine.EngineContext.PPCConfig.encode(message.withPPC, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        if (message.withLexicon != null && message.hasOwnProperty("withLexicon"))
                            $root.ntx.v2t.engine.Lexicon.encode(message.withLexicon, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified V2TConfig message, length delimited. Does not implicitly {@link ntx.v2t.engine.EngineContext.V2TConfig.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof ntx.v2t.engine.EngineContext.V2TConfig
                     * @static
                     * @param {ntx.v2t.engine.EngineContext.IV2TConfig} message V2TConfig message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    V2TConfig.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a V2TConfig message from the specified reader or buffer.
                     * @function decode
                     * @memberof ntx.v2t.engine.EngineContext.V2TConfig
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {ntx.v2t.engine.EngineContext.V2TConfig} V2TConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    V2TConfig.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ntx.v2t.engine.EngineContext.V2TConfig();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.withVAD = $root.ntx.v2t.engine.EngineContext.VADConfig.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.withPPC = $root.ntx.v2t.engine.EngineContext.PPCConfig.decode(reader, reader.uint32());
                                break;
                            case 4:
                                message.withLexicon = $root.ntx.v2t.engine.Lexicon.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a V2TConfig message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof ntx.v2t.engine.EngineContext.V2TConfig
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {ntx.v2t.engine.EngineContext.V2TConfig} V2TConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    V2TConfig.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a V2TConfig message.
                     * @function verify
                     * @memberof ntx.v2t.engine.EngineContext.V2TConfig
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    V2TConfig.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.withVAD != null && message.hasOwnProperty("withVAD")) {
                            var error = $root.ntx.v2t.engine.EngineContext.VADConfig.verify(message.withVAD);
                            if (error)
                                return "withVAD." + error;
                        }
                        if (message.withPPC != null && message.hasOwnProperty("withPPC")) {
                            error = $root.ntx.v2t.engine.EngineContext.PPCConfig.verify(message.withPPC);
                            if (error)
                                return "withPPC." + error;
                        }
                        if (message.withLexicon != null && message.hasOwnProperty("withLexicon")) {
                            error = $root.ntx.v2t.engine.Lexicon.verify(message.withLexicon);
                            if (error)
                                return "withLexicon." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a V2TConfig message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof ntx.v2t.engine.EngineContext.V2TConfig
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {ntx.v2t.engine.EngineContext.V2TConfig} V2TConfig
                     */
                    V2TConfig.fromObject = function fromObject(object) {
                        if (object instanceof $root.ntx.v2t.engine.EngineContext.V2TConfig)
                            return object;
                        var message = new $root.ntx.v2t.engine.EngineContext.V2TConfig();
                        if (object.withVAD != null) {
                            if (typeof object.withVAD !== "object")
                                throw TypeError(".ntx.v2t.engine.EngineContext.V2TConfig.withVAD: object expected");
                            message.withVAD = $root.ntx.v2t.engine.EngineContext.VADConfig.fromObject(object.withVAD);
                        }
                        if (object.withPPC != null) {
                            if (typeof object.withPPC !== "object")
                                throw TypeError(".ntx.v2t.engine.EngineContext.V2TConfig.withPPC: object expected");
                            message.withPPC = $root.ntx.v2t.engine.EngineContext.PPCConfig.fromObject(object.withPPC);
                        }
                        if (object.withLexicon != null) {
                            if (typeof object.withLexicon !== "object")
                                throw TypeError(".ntx.v2t.engine.EngineContext.V2TConfig.withLexicon: object expected");
                            message.withLexicon = $root.ntx.v2t.engine.Lexicon.fromObject(object.withLexicon);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a V2TConfig message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof ntx.v2t.engine.EngineContext.V2TConfig
                     * @static
                     * @param {ntx.v2t.engine.EngineContext.V2TConfig} message V2TConfig
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    V2TConfig.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.withVAD = null;
                            object.withPPC = null;
                            object.withLexicon = null;
                        }
                        if (message.withVAD != null && message.hasOwnProperty("withVAD"))
                            object.withVAD = $root.ntx.v2t.engine.EngineContext.VADConfig.toObject(message.withVAD, options);
                        if (message.withPPC != null && message.hasOwnProperty("withPPC"))
                            object.withPPC = $root.ntx.v2t.engine.EngineContext.PPCConfig.toObject(message.withPPC, options);
                        if (message.withLexicon != null && message.hasOwnProperty("withLexicon"))
                            object.withLexicon = $root.ntx.v2t.engine.Lexicon.toObject(message.withLexicon, options);
                        return object;
                    };

                    /**
                     * Converts this V2TConfig to JSON.
                     * @function toJSON
                     * @memberof ntx.v2t.engine.EngineContext.V2TConfig
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    V2TConfig.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return V2TConfig;
                })();

                EngineContext.PPCConfig = (function() {

                    /**
                     * Properties of a PPCConfig.
                     * @memberof ntx.v2t.engine.EngineContext
                     * @interface IPPCConfig
                     */

                    /**
                     * Constructs a new PPCConfig.
                     * @memberof ntx.v2t.engine.EngineContext
                     * @classdesc Represents a PPCConfig.
                     * @constructor
                     * @param {ntx.v2t.engine.EngineContext.IPPCConfig=} [properties] Properties to set
                     */
                    function PPCConfig(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Creates a new PPCConfig instance using the specified properties.
                     * @function create
                     * @memberof ntx.v2t.engine.EngineContext.PPCConfig
                     * @static
                     * @param {ntx.v2t.engine.EngineContext.IPPCConfig=} [properties] Properties to set
                     * @returns {ntx.v2t.engine.EngineContext.PPCConfig} PPCConfig instance
                     */
                    PPCConfig.create = function create(properties) {
                        return new PPCConfig(properties);
                    };

                    /**
                     * Encodes the specified PPCConfig message. Does not implicitly {@link ntx.v2t.engine.EngineContext.PPCConfig.verify|verify} messages.
                     * @function encode
                     * @memberof ntx.v2t.engine.EngineContext.PPCConfig
                     * @static
                     * @param {ntx.v2t.engine.EngineContext.IPPCConfig} message PPCConfig message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PPCConfig.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };

                    /**
                     * Encodes the specified PPCConfig message, length delimited. Does not implicitly {@link ntx.v2t.engine.EngineContext.PPCConfig.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof ntx.v2t.engine.EngineContext.PPCConfig
                     * @static
                     * @param {ntx.v2t.engine.EngineContext.IPPCConfig} message PPCConfig message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PPCConfig.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a PPCConfig message from the specified reader or buffer.
                     * @function decode
                     * @memberof ntx.v2t.engine.EngineContext.PPCConfig
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {ntx.v2t.engine.EngineContext.PPCConfig} PPCConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PPCConfig.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ntx.v2t.engine.EngineContext.PPCConfig();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a PPCConfig message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof ntx.v2t.engine.EngineContext.PPCConfig
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {ntx.v2t.engine.EngineContext.PPCConfig} PPCConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PPCConfig.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a PPCConfig message.
                     * @function verify
                     * @memberof ntx.v2t.engine.EngineContext.PPCConfig
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PPCConfig.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };

                    /**
                     * Creates a PPCConfig message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof ntx.v2t.engine.EngineContext.PPCConfig
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {ntx.v2t.engine.EngineContext.PPCConfig} PPCConfig
                     */
                    PPCConfig.fromObject = function fromObject(object) {
                        if (object instanceof $root.ntx.v2t.engine.EngineContext.PPCConfig)
                            return object;
                        return new $root.ntx.v2t.engine.EngineContext.PPCConfig();
                    };

                    /**
                     * Creates a plain object from a PPCConfig message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof ntx.v2t.engine.EngineContext.PPCConfig
                     * @static
                     * @param {ntx.v2t.engine.EngineContext.PPCConfig} message PPCConfig
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PPCConfig.toObject = function toObject() {
                        return {};
                    };

                    /**
                     * Converts this PPCConfig to JSON.
                     * @function toJSON
                     * @memberof ntx.v2t.engine.EngineContext.PPCConfig
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PPCConfig.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return PPCConfig;
                })();

                /**
                 * AudioChannel enum.
                 * @enum {string}
                 * @property {number} AUDIO_CHANNEL_DOWNMIX=0 AUDIO_CHANNEL_DOWNMIX value
                 * @property {number} AUDIO_CHANNEL_LEFT=1 AUDIO_CHANNEL_LEFT value
                 * @property {number} AUDIO_CHANNEL_RIGHT=2 AUDIO_CHANNEL_RIGHT value
                 */
                EngineContext.AudioChannel = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "AUDIO_CHANNEL_DOWNMIX"] = 0;
                    values[valuesById[1] = "AUDIO_CHANNEL_LEFT"] = 1;
                    values[valuesById[2] = "AUDIO_CHANNEL_RIGHT"] = 2;
                    return values;
                })();

                return EngineContext;
            })();

            engine.EngineContextStart = (function() {

                /**
                 * Properties of an EngineContextStart.
                 * @memberof ntx.v2t.engine
                 * @interface IEngineContextStart
                 * @property {ntx.v2t.engine.IEngineContext} [context] EngineContextStart context
                 */

                /**
                 * Constructs a new EngineContextStart.
                 * @memberof ntx.v2t.engine
                 * @classdesc Represents an EngineContextStart.
                 * @constructor
                 * @param {ntx.v2t.engine.IEngineContextStart=} [properties] Properties to set
                 */
                function EngineContextStart(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * EngineContextStart context.
                 * @member {(ntx.v2t.engine.IEngineContext|null|undefined)}context
                 * @memberof ntx.v2t.engine.EngineContextStart
                 * @instance
                 */
                EngineContextStart.prototype.context = null;

                /**
                 * Creates a new EngineContextStart instance using the specified properties.
                 * @function create
                 * @memberof ntx.v2t.engine.EngineContextStart
                 * @static
                 * @param {ntx.v2t.engine.IEngineContextStart=} [properties] Properties to set
                 * @returns {ntx.v2t.engine.EngineContextStart} EngineContextStart instance
                 */
                EngineContextStart.create = function create(properties) {
                    return new EngineContextStart(properties);
                };

                /**
                 * Encodes the specified EngineContextStart message. Does not implicitly {@link ntx.v2t.engine.EngineContextStart.verify|verify} messages.
                 * @function encode
                 * @memberof ntx.v2t.engine.EngineContextStart
                 * @static
                 * @param {ntx.v2t.engine.IEngineContextStart} message EngineContextStart message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EngineContextStart.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.context != null && message.hasOwnProperty("context"))
                        $root.ntx.v2t.engine.EngineContext.encode(message.context, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified EngineContextStart message, length delimited. Does not implicitly {@link ntx.v2t.engine.EngineContextStart.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof ntx.v2t.engine.EngineContextStart
                 * @static
                 * @param {ntx.v2t.engine.IEngineContextStart} message EngineContextStart message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EngineContextStart.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an EngineContextStart message from the specified reader or buffer.
                 * @function decode
                 * @memberof ntx.v2t.engine.EngineContextStart
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {ntx.v2t.engine.EngineContextStart} EngineContextStart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EngineContextStart.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ntx.v2t.engine.EngineContextStart();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.context = $root.ntx.v2t.engine.EngineContext.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an EngineContextStart message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof ntx.v2t.engine.EngineContextStart
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {ntx.v2t.engine.EngineContextStart} EngineContextStart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EngineContextStart.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an EngineContextStart message.
                 * @function verify
                 * @memberof ntx.v2t.engine.EngineContextStart
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EngineContextStart.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.context != null && message.hasOwnProperty("context")) {
                        var error = $root.ntx.v2t.engine.EngineContext.verify(message.context);
                        if (error)
                            return "context." + error;
                    }
                    return null;
                };

                /**
                 * Creates an EngineContextStart message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof ntx.v2t.engine.EngineContextStart
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {ntx.v2t.engine.EngineContextStart} EngineContextStart
                 */
                EngineContextStart.fromObject = function fromObject(object) {
                    if (object instanceof $root.ntx.v2t.engine.EngineContextStart)
                        return object;
                    var message = new $root.ntx.v2t.engine.EngineContextStart();
                    if (object.context != null) {
                        if (typeof object.context !== "object")
                            throw TypeError(".ntx.v2t.engine.EngineContextStart.context: object expected");
                        message.context = $root.ntx.v2t.engine.EngineContext.fromObject(object.context);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an EngineContextStart message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof ntx.v2t.engine.EngineContextStart
                 * @static
                 * @param {ntx.v2t.engine.EngineContextStart} message EngineContextStart
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EngineContextStart.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.context = null;
                    if (message.context != null && message.hasOwnProperty("context"))
                        object.context = $root.ntx.v2t.engine.EngineContext.toObject(message.context, options);
                    return object;
                };

                /**
                 * Converts this EngineContextStart to JSON.
                 * @function toJSON
                 * @memberof ntx.v2t.engine.EngineContextStart
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EngineContextStart.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return EngineContextStart;
            })();

            engine.EngineContextEnd = (function() {

                /**
                 * Properties of an EngineContextEnd.
                 * @memberof ntx.v2t.engine
                 * @interface IEngineContextEnd
                 * @property {string} [error] EngineContextEnd error
                 */

                /**
                 * Constructs a new EngineContextEnd.
                 * @memberof ntx.v2t.engine
                 * @classdesc Represents an EngineContextEnd.
                 * @constructor
                 * @param {ntx.v2t.engine.IEngineContextEnd=} [properties] Properties to set
                 */
                function EngineContextEnd(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * EngineContextEnd error.
                 * @member {string}error
                 * @memberof ntx.v2t.engine.EngineContextEnd
                 * @instance
                 */
                EngineContextEnd.prototype.error = "";

                /**
                 * Creates a new EngineContextEnd instance using the specified properties.
                 * @function create
                 * @memberof ntx.v2t.engine.EngineContextEnd
                 * @static
                 * @param {ntx.v2t.engine.IEngineContextEnd=} [properties] Properties to set
                 * @returns {ntx.v2t.engine.EngineContextEnd} EngineContextEnd instance
                 */
                EngineContextEnd.create = function create(properties) {
                    return new EngineContextEnd(properties);
                };

                /**
                 * Encodes the specified EngineContextEnd message. Does not implicitly {@link ntx.v2t.engine.EngineContextEnd.verify|verify} messages.
                 * @function encode
                 * @memberof ntx.v2t.engine.EngineContextEnd
                 * @static
                 * @param {ntx.v2t.engine.IEngineContextEnd} message EngineContextEnd message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EngineContextEnd.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.error != null && message.hasOwnProperty("error"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.error);
                    return writer;
                };

                /**
                 * Encodes the specified EngineContextEnd message, length delimited. Does not implicitly {@link ntx.v2t.engine.EngineContextEnd.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof ntx.v2t.engine.EngineContextEnd
                 * @static
                 * @param {ntx.v2t.engine.IEngineContextEnd} message EngineContextEnd message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EngineContextEnd.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an EngineContextEnd message from the specified reader or buffer.
                 * @function decode
                 * @memberof ntx.v2t.engine.EngineContextEnd
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {ntx.v2t.engine.EngineContextEnd} EngineContextEnd
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EngineContextEnd.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ntx.v2t.engine.EngineContextEnd();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.error = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an EngineContextEnd message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof ntx.v2t.engine.EngineContextEnd
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {ntx.v2t.engine.EngineContextEnd} EngineContextEnd
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EngineContextEnd.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an EngineContextEnd message.
                 * @function verify
                 * @memberof ntx.v2t.engine.EngineContextEnd
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EngineContextEnd.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.error != null && message.hasOwnProperty("error"))
                        if (!$util.isString(message.error))
                            return "error: string expected";
                    return null;
                };

                /**
                 * Creates an EngineContextEnd message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof ntx.v2t.engine.EngineContextEnd
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {ntx.v2t.engine.EngineContextEnd} EngineContextEnd
                 */
                EngineContextEnd.fromObject = function fromObject(object) {
                    if (object instanceof $root.ntx.v2t.engine.EngineContextEnd)
                        return object;
                    var message = new $root.ntx.v2t.engine.EngineContextEnd();
                    if (object.error != null)
                        message.error = String(object.error);
                    return message;
                };

                /**
                 * Creates a plain object from an EngineContextEnd message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof ntx.v2t.engine.EngineContextEnd
                 * @static
                 * @param {ntx.v2t.engine.EngineContextEnd} message EngineContextEnd
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EngineContextEnd.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.error = "";
                    if (message.error != null && message.hasOwnProperty("error"))
                        object.error = message.error;
                    return object;
                };

                /**
                 * Converts this EngineContextEnd to JSON.
                 * @function toJSON
                 * @memberof ntx.v2t.engine.EngineContextEnd
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EngineContextEnd.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return EngineContextEnd;
            })();

            engine.EventsPush = (function() {

                /**
                 * Properties of an EventsPush.
                 * @memberof ntx.v2t.engine
                 * @interface IEventsPush
                 * @property {ntx.v2t.engine.IEvents} [events] EventsPush events
                 */

                /**
                 * Constructs a new EventsPush.
                 * @memberof ntx.v2t.engine
                 * @classdesc Represents an EventsPush.
                 * @constructor
                 * @param {ntx.v2t.engine.IEventsPush=} [properties] Properties to set
                 */
                function EventsPush(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * EventsPush events.
                 * @member {(ntx.v2t.engine.IEvents|null|undefined)}events
                 * @memberof ntx.v2t.engine.EventsPush
                 * @instance
                 */
                EventsPush.prototype.events = null;

                /**
                 * Creates a new EventsPush instance using the specified properties.
                 * @function create
                 * @memberof ntx.v2t.engine.EventsPush
                 * @static
                 * @param {ntx.v2t.engine.IEventsPush=} [properties] Properties to set
                 * @returns {ntx.v2t.engine.EventsPush} EventsPush instance
                 */
                EventsPush.create = function create(properties) {
                    return new EventsPush(properties);
                };

                /**
                 * Encodes the specified EventsPush message. Does not implicitly {@link ntx.v2t.engine.EventsPush.verify|verify} messages.
                 * @function encode
                 * @memberof ntx.v2t.engine.EventsPush
                 * @static
                 * @param {ntx.v2t.engine.IEventsPush} message EventsPush message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EventsPush.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.events != null && message.hasOwnProperty("events"))
                        $root.ntx.v2t.engine.Events.encode(message.events, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified EventsPush message, length delimited. Does not implicitly {@link ntx.v2t.engine.EventsPush.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof ntx.v2t.engine.EventsPush
                 * @static
                 * @param {ntx.v2t.engine.IEventsPush} message EventsPush message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EventsPush.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an EventsPush message from the specified reader or buffer.
                 * @function decode
                 * @memberof ntx.v2t.engine.EventsPush
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {ntx.v2t.engine.EventsPush} EventsPush
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EventsPush.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ntx.v2t.engine.EventsPush();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.events = $root.ntx.v2t.engine.Events.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an EventsPush message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof ntx.v2t.engine.EventsPush
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {ntx.v2t.engine.EventsPush} EventsPush
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EventsPush.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an EventsPush message.
                 * @function verify
                 * @memberof ntx.v2t.engine.EventsPush
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EventsPush.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.events != null && message.hasOwnProperty("events")) {
                        var error = $root.ntx.v2t.engine.Events.verify(message.events);
                        if (error)
                            return "events." + error;
                    }
                    return null;
                };

                /**
                 * Creates an EventsPush message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof ntx.v2t.engine.EventsPush
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {ntx.v2t.engine.EventsPush} EventsPush
                 */
                EventsPush.fromObject = function fromObject(object) {
                    if (object instanceof $root.ntx.v2t.engine.EventsPush)
                        return object;
                    var message = new $root.ntx.v2t.engine.EventsPush();
                    if (object.events != null) {
                        if (typeof object.events !== "object")
                            throw TypeError(".ntx.v2t.engine.EventsPush.events: object expected");
                        message.events = $root.ntx.v2t.engine.Events.fromObject(object.events);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an EventsPush message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof ntx.v2t.engine.EventsPush
                 * @static
                 * @param {ntx.v2t.engine.EventsPush} message EventsPush
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EventsPush.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.events = null;
                    if (message.events != null && message.hasOwnProperty("events"))
                        object.events = $root.ntx.v2t.engine.Events.toObject(message.events, options);
                    return object;
                };

                /**
                 * Converts this EventsPush to JSON.
                 * @function toJSON
                 * @memberof ntx.v2t.engine.EventsPush
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EventsPush.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return EventsPush;
            })();

            engine.EventsPull = (function() {

                /**
                 * Properties of an EventsPull.
                 * @memberof ntx.v2t.engine
                 * @interface IEventsPull
                 */

                /**
                 * Constructs a new EventsPull.
                 * @memberof ntx.v2t.engine
                 * @classdesc Represents an EventsPull.
                 * @constructor
                 * @param {ntx.v2t.engine.IEventsPull=} [properties] Properties to set
                 */
                function EventsPull(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new EventsPull instance using the specified properties.
                 * @function create
                 * @memberof ntx.v2t.engine.EventsPull
                 * @static
                 * @param {ntx.v2t.engine.IEventsPull=} [properties] Properties to set
                 * @returns {ntx.v2t.engine.EventsPull} EventsPull instance
                 */
                EventsPull.create = function create(properties) {
                    return new EventsPull(properties);
                };

                /**
                 * Encodes the specified EventsPull message. Does not implicitly {@link ntx.v2t.engine.EventsPull.verify|verify} messages.
                 * @function encode
                 * @memberof ntx.v2t.engine.EventsPull
                 * @static
                 * @param {ntx.v2t.engine.IEventsPull} message EventsPull message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EventsPull.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified EventsPull message, length delimited. Does not implicitly {@link ntx.v2t.engine.EventsPull.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof ntx.v2t.engine.EventsPull
                 * @static
                 * @param {ntx.v2t.engine.IEventsPull} message EventsPull message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EventsPull.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an EventsPull message from the specified reader or buffer.
                 * @function decode
                 * @memberof ntx.v2t.engine.EventsPull
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {ntx.v2t.engine.EventsPull} EventsPull
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EventsPull.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ntx.v2t.engine.EventsPull();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an EventsPull message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof ntx.v2t.engine.EventsPull
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {ntx.v2t.engine.EventsPull} EventsPull
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EventsPull.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an EventsPull message.
                 * @function verify
                 * @memberof ntx.v2t.engine.EventsPull
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EventsPull.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                /**
                 * Creates an EventsPull message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof ntx.v2t.engine.EventsPull
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {ntx.v2t.engine.EventsPull} EventsPull
                 */
                EventsPull.fromObject = function fromObject(object) {
                    if (object instanceof $root.ntx.v2t.engine.EventsPull)
                        return object;
                    return new $root.ntx.v2t.engine.EventsPull();
                };

                /**
                 * Creates a plain object from an EventsPull message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof ntx.v2t.engine.EventsPull
                 * @static
                 * @param {ntx.v2t.engine.EventsPull} message EventsPull
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EventsPull.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this EventsPull to JSON.
                 * @function toJSON
                 * @memberof ntx.v2t.engine.EventsPull
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EventsPull.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return EventsPull;
            })();

            engine.EngineStream = (function() {

                /**
                 * Properties of an EngineStream.
                 * @memberof ntx.v2t.engine
                 * @interface IEngineStream
                 * @property {ntx.v2t.engine.IEngineContextStart} [start] EngineStream start
                 * @property {ntx.v2t.engine.IEventsPush} [push] EngineStream push
                 * @property {ntx.v2t.engine.IEventsPull} [pull] EngineStream pull
                 * @property {ntx.v2t.engine.IEngineContextEnd} [end] EngineStream end
                 */

                /**
                 * Constructs a new EngineStream.
                 * @memberof ntx.v2t.engine
                 * @classdesc Represents an EngineStream.
                 * @constructor
                 * @param {ntx.v2t.engine.IEngineStream=} [properties] Properties to set
                 */
                function EngineStream(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * EngineStream start.
                 * @member {(ntx.v2t.engine.IEngineContextStart|null|undefined)}start
                 * @memberof ntx.v2t.engine.EngineStream
                 * @instance
                 */
                EngineStream.prototype.start = null;

                /**
                 * EngineStream push.
                 * @member {(ntx.v2t.engine.IEventsPush|null|undefined)}push
                 * @memberof ntx.v2t.engine.EngineStream
                 * @instance
                 */
                EngineStream.prototype.push = null;

                /**
                 * EngineStream pull.
                 * @member {(ntx.v2t.engine.IEventsPull|null|undefined)}pull
                 * @memberof ntx.v2t.engine.EngineStream
                 * @instance
                 */
                EngineStream.prototype.pull = null;

                /**
                 * EngineStream end.
                 * @member {(ntx.v2t.engine.IEngineContextEnd|null|undefined)}end
                 * @memberof ntx.v2t.engine.EngineStream
                 * @instance
                 */
                EngineStream.prototype.end = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                /**
                 * EngineStream payload.
                 * @member {string|undefined} payload
                 * @memberof ntx.v2t.engine.EngineStream
                 * @instance
                 */
                Object.defineProperty(EngineStream.prototype, "payload", {
                    get: $util.oneOfGetter($oneOfFields = ["start", "push", "pull", "end"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new EngineStream instance using the specified properties.
                 * @function create
                 * @memberof ntx.v2t.engine.EngineStream
                 * @static
                 * @param {ntx.v2t.engine.IEngineStream=} [properties] Properties to set
                 * @returns {ntx.v2t.engine.EngineStream} EngineStream instance
                 */
                EngineStream.create = function create(properties) {
                    return new EngineStream(properties);
                };

                /**
                 * Encodes the specified EngineStream message. Does not implicitly {@link ntx.v2t.engine.EngineStream.verify|verify} messages.
                 * @function encode
                 * @memberof ntx.v2t.engine.EngineStream
                 * @static
                 * @param {ntx.v2t.engine.IEngineStream} message EngineStream message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EngineStream.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.start != null && message.hasOwnProperty("start"))
                        $root.ntx.v2t.engine.EngineContextStart.encode(message.start, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.push != null && message.hasOwnProperty("push"))
                        $root.ntx.v2t.engine.EventsPush.encode(message.push, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.pull != null && message.hasOwnProperty("pull"))
                        $root.ntx.v2t.engine.EventsPull.encode(message.pull, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.end != null && message.hasOwnProperty("end"))
                        $root.ntx.v2t.engine.EngineContextEnd.encode(message.end, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified EngineStream message, length delimited. Does not implicitly {@link ntx.v2t.engine.EngineStream.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof ntx.v2t.engine.EngineStream
                 * @static
                 * @param {ntx.v2t.engine.IEngineStream} message EngineStream message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EngineStream.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an EngineStream message from the specified reader or buffer.
                 * @function decode
                 * @memberof ntx.v2t.engine.EngineStream
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {ntx.v2t.engine.EngineStream} EngineStream
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EngineStream.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ntx.v2t.engine.EngineStream();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.start = $root.ntx.v2t.engine.EngineContextStart.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.push = $root.ntx.v2t.engine.EventsPush.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.pull = $root.ntx.v2t.engine.EventsPull.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.end = $root.ntx.v2t.engine.EngineContextEnd.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an EngineStream message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof ntx.v2t.engine.EngineStream
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {ntx.v2t.engine.EngineStream} EngineStream
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EngineStream.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an EngineStream message.
                 * @function verify
                 * @memberof ntx.v2t.engine.EngineStream
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EngineStream.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.start != null && message.hasOwnProperty("start")) {
                        properties.payload = 1;
                        var error = $root.ntx.v2t.engine.EngineContextStart.verify(message.start);
                        if (error)
                            return "start." + error;
                    }
                    if (message.push != null && message.hasOwnProperty("push")) {
                        if (properties.payload === 1)
                            return "payload: multiple values";
                        properties.payload = 1;
                        error = $root.ntx.v2t.engine.EventsPush.verify(message.push);
                        if (error)
                            return "push." + error;
                    }
                    if (message.pull != null && message.hasOwnProperty("pull")) {
                        if (properties.payload === 1)
                            return "payload: multiple values";
                        properties.payload = 1;
                        error = $root.ntx.v2t.engine.EventsPull.verify(message.pull);
                        if (error)
                            return "pull." + error;
                    }
                    if (message.end != null && message.hasOwnProperty("end")) {
                        if (properties.payload === 1)
                            return "payload: multiple values";
                        properties.payload = 1;
                        error = $root.ntx.v2t.engine.EngineContextEnd.verify(message.end);
                        if (error)
                            return "end." + error;
                    }
                    return null;
                };

                /**
                 * Creates an EngineStream message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof ntx.v2t.engine.EngineStream
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {ntx.v2t.engine.EngineStream} EngineStream
                 */
                EngineStream.fromObject = function fromObject(object) {
                    if (object instanceof $root.ntx.v2t.engine.EngineStream)
                        return object;
                    var message = new $root.ntx.v2t.engine.EngineStream();
                    if (object.start != null) {
                        if (typeof object.start !== "object")
                            throw TypeError(".ntx.v2t.engine.EngineStream.start: object expected");
                        message.start = $root.ntx.v2t.engine.EngineContextStart.fromObject(object.start);
                    }
                    if (object.push != null) {
                        if (typeof object.push !== "object")
                            throw TypeError(".ntx.v2t.engine.EngineStream.push: object expected");
                        message.push = $root.ntx.v2t.engine.EventsPush.fromObject(object.push);
                    }
                    if (object.pull != null) {
                        if (typeof object.pull !== "object")
                            throw TypeError(".ntx.v2t.engine.EngineStream.pull: object expected");
                        message.pull = $root.ntx.v2t.engine.EventsPull.fromObject(object.pull);
                    }
                    if (object.end != null) {
                        if (typeof object.end !== "object")
                            throw TypeError(".ntx.v2t.engine.EngineStream.end: object expected");
                        message.end = $root.ntx.v2t.engine.EngineContextEnd.fromObject(object.end);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an EngineStream message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof ntx.v2t.engine.EngineStream
                 * @static
                 * @param {ntx.v2t.engine.EngineStream} message EngineStream
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EngineStream.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.start != null && message.hasOwnProperty("start")) {
                        object.start = $root.ntx.v2t.engine.EngineContextStart.toObject(message.start, options);
                        if (options.oneofs)
                            object.payload = "start";
                    }
                    if (message.push != null && message.hasOwnProperty("push")) {
                        object.push = $root.ntx.v2t.engine.EventsPush.toObject(message.push, options);
                        if (options.oneofs)
                            object.payload = "push";
                    }
                    if (message.pull != null && message.hasOwnProperty("pull")) {
                        object.pull = $root.ntx.v2t.engine.EventsPull.toObject(message.pull, options);
                        if (options.oneofs)
                            object.payload = "pull";
                    }
                    if (message.end != null && message.hasOwnProperty("end")) {
                        object.end = $root.ntx.v2t.engine.EngineContextEnd.toObject(message.end, options);
                        if (options.oneofs)
                            object.payload = "end";
                    }
                    return object;
                };

                /**
                 * Converts this EngineStream to JSON.
                 * @function toJSON
                 * @memberof ntx.v2t.engine.EngineStream
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EngineStream.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return EngineStream;
            })();

            engine.EngineService = (function() {

                /**
                 * Constructs a new EngineService service.
                 * @memberof ntx.v2t.engine
                 * @classdesc Represents an EngineService
                 * @extends $protobuf.rpc.Service
                 * @constructor
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 */
                function EngineService(rpcImpl, requestDelimited, responseDelimited) {
                    $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                }

                (EngineService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = EngineService;

                /**
                 * Creates new EngineService service using the specified rpc implementation.
                 * @function create
                 * @memberof ntx.v2t.engine.EngineService
                 * @static
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 * @returns {EngineService} RPC service. Useful where requests and/or responses are streamed.
                 */
                EngineService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                    return new this(rpcImpl, requestDelimited, responseDelimited);
                };

                /**
                 * Callback as used by {@link ntx.v2t.engine.EngineService#streamingRecognize}.
                 * @memberof ntx.v2t.engine.EngineService
                 * @typedef StreamingRecognizeCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {ntx.v2t.engine.EngineStream} [response] EngineStream
                 */

                /**
                 * Calls StreamingRecognize.
                 * @function .streamingRecognize
                 * @memberof ntx.v2t.engine.EngineService
                 * @instance
                 * @param {ntx.v2t.engine.IEngineStream} request EngineStream message or plain object
                 * @param {ntx.v2t.engine.EngineService.StreamingRecognizeCallback} callback Node-style callback called with the error, if any, and EngineStream
                 * @returns {undefined}
                 * @variation 1
                 */
                EngineService.prototype.streamingRecognize = function streamingRecognize(request, callback) {
                    return this.rpcCall(streamingRecognize, $root.ntx.v2t.engine.EngineStream, $root.ntx.v2t.engine.EngineStream, request, callback);
                };

                /**
                 * Calls StreamingRecognize.
                 * @function streamingRecognize
                 * @memberof ntx.v2t.engine.EngineService
                 * @instance
                 * @param {ntx.v2t.engine.IEngineStream} request EngineStream message or plain object
                 * @returns {Promise<ntx.v2t.engine.EngineStream>} Promise
                 * @variation 2
                 */

                return EngineService;
            })();

            return engine;
        })();

        return v2t;
    })();

    return ntx;
})();

module.exports = $root;
