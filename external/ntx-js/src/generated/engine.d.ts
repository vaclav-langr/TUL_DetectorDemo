import * as $protobuf from "protobufjs";

/** Namespace ntx. */
export namespace ntx {

    /** Namespace v2t. */
    namespace v2t {

        /** Namespace engine. */
        namespace engine {

            /** Properties of an Event. */
            interface IEvent {

                /** Event timestamp */
                timestamp?: ntx.v2t.engine.Event.ITimestamp;

                /** Event label */
                label?: ntx.v2t.engine.Event.ILabel;

                /** Event audio */
                audio?: ntx.v2t.engine.Event.IAudio;

                /** Event meta */
                meta?: ntx.v2t.engine.Event.IMeta;
            }

            /** Represents an Event. */
            class Event {

                /**
                 * Constructs a new Event.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: ntx.v2t.engine.IEvent);

                /** Event timestamp. */
                public timestamp?: (ntx.v2t.engine.Event.ITimestamp|null);

                /** Event label. */
                public label?: (ntx.v2t.engine.Event.ILabel|null);

                /** Event audio. */
                public audio?: (ntx.v2t.engine.Event.IAudio|null);

                /** Event meta. */
                public meta?: (ntx.v2t.engine.Event.IMeta|null);

                /** Event body. */
                public body?: string;

                /**
                 * Creates a new Event instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Event instance
                 */
                public static create(properties?: ntx.v2t.engine.IEvent): ntx.v2t.engine.Event;

                /**
                 * Encodes the specified Event message. Does not implicitly {@link ntx.v2t.engine.Event.verify|verify} messages.
                 * @param message Event message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: ntx.v2t.engine.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Event message, length delimited. Does not implicitly {@link ntx.v2t.engine.Event.verify|verify} messages.
                 * @param message Event message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: ntx.v2t.engine.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Event message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Event
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ntx.v2t.engine.Event;

                /**
                 * Decodes an Event message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Event
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ntx.v2t.engine.Event;

                /**
                 * Verifies an Event message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Event message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Event
                 */
                public static fromObject(object: { [k: string]: any }): ntx.v2t.engine.Event;

                /**
                 * Creates a plain object from an Event message. Also converts values to other types if specified.
                 * @param message Event
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: ntx.v2t.engine.Event, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Event to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace Event {

                /** Properties of a Timestamp. */
                interface ITimestamp {

                    /** Timestamp timestamp */
                    timestamp?: (number|Long);

                    /** Timestamp recovery */
                    recovery?: (number|Long);
                }

                /** Represents a Timestamp. */
                class Timestamp {

                    /**
                     * Constructs a new Timestamp.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: ntx.v2t.engine.Event.ITimestamp);

                    /** Timestamp timestamp. */
                    public timestamp: (number|Long);

                    /** Timestamp recovery. */
                    public recovery: (number|Long);

                    /** Timestamp value. */
                    public value?: string;

                    /**
                     * Creates a new Timestamp instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Timestamp instance
                     */
                    public static create(properties?: ntx.v2t.engine.Event.ITimestamp): ntx.v2t.engine.Event.Timestamp;

                    /**
                     * Encodes the specified Timestamp message. Does not implicitly {@link ntx.v2t.engine.Event.Timestamp.verify|verify} messages.
                     * @param message Timestamp message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: ntx.v2t.engine.Event.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link ntx.v2t.engine.Event.Timestamp.verify|verify} messages.
                     * @param message Timestamp message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: ntx.v2t.engine.Event.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Timestamp message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Timestamp
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ntx.v2t.engine.Event.Timestamp;

                    /**
                     * Decodes a Timestamp message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Timestamp
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ntx.v2t.engine.Event.Timestamp;

                    /**
                     * Verifies a Timestamp message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Timestamp
                     */
                    public static fromObject(object: { [k: string]: any }): ntx.v2t.engine.Event.Timestamp;

                    /**
                     * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
                     * @param message Timestamp
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: ntx.v2t.engine.Event.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Timestamp to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Label. */
                interface ILabel {

                    /** Label item */
                    item?: string;

                    /** Label plus */
                    plus?: string;

                    /** Label noise */
                    noise?: string;
                }

                /** Represents a Label. */
                class Label {

                    /**
                     * Constructs a new Label.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: ntx.v2t.engine.Event.ILabel);

                    /** Label item. */
                    public item: string;

                    /** Label plus. */
                    public plus: string;

                    /** Label noise. */
                    public noise: string;

                    /** Label label. */
                    public label?: string;

                    /**
                     * Creates a new Label instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Label instance
                     */
                    public static create(properties?: ntx.v2t.engine.Event.ILabel): ntx.v2t.engine.Event.Label;

                    /**
                     * Encodes the specified Label message. Does not implicitly {@link ntx.v2t.engine.Event.Label.verify|verify} messages.
                     * @param message Label message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: ntx.v2t.engine.Event.ILabel, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Label message, length delimited. Does not implicitly {@link ntx.v2t.engine.Event.Label.verify|verify} messages.
                     * @param message Label message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: ntx.v2t.engine.Event.ILabel, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Label message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Label
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ntx.v2t.engine.Event.Label;

                    /**
                     * Decodes a Label message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Label
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ntx.v2t.engine.Event.Label;

                    /**
                     * Verifies a Label message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Label message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Label
                     */
                    public static fromObject(object: { [k: string]: any }): ntx.v2t.engine.Event.Label;

                    /**
                     * Creates a plain object from a Label message. Also converts values to other types if specified.
                     * @param message Label
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: ntx.v2t.engine.Event.Label, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Label to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an Audio. */
                interface IAudio {

                    /** Audio body */
                    body?: Uint8Array;

                    /** Audio offset */
                    offset?: (number|Long);

                    /** Audio duration */
                    duration?: (number|Long);
                }

                /** Represents an Audio. */
                class Audio {

                    /**
                     * Constructs a new Audio.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: ntx.v2t.engine.Event.IAudio);

                    /** Audio body. */
                    public body: Uint8Array;

                    /** Audio offset. */
                    public offset: (number|Long);

                    /** Audio duration. */
                    public duration: (number|Long);

                    /**
                     * Creates a new Audio instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Audio instance
                     */
                    public static create(properties?: ntx.v2t.engine.Event.IAudio): ntx.v2t.engine.Event.Audio;

                    /**
                     * Encodes the specified Audio message. Does not implicitly {@link ntx.v2t.engine.Event.Audio.verify|verify} messages.
                     * @param message Audio message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: ntx.v2t.engine.Event.IAudio, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Audio message, length delimited. Does not implicitly {@link ntx.v2t.engine.Event.Audio.verify|verify} messages.
                     * @param message Audio message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: ntx.v2t.engine.Event.IAudio, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Audio message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Audio
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ntx.v2t.engine.Event.Audio;

                    /**
                     * Decodes an Audio message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Audio
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ntx.v2t.engine.Event.Audio;

                    /**
                     * Verifies an Audio message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Audio message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Audio
                     */
                    public static fromObject(object: { [k: string]: any }): ntx.v2t.engine.Event.Audio;

                    /**
                     * Creates a plain object from an Audio message. Also converts values to other types if specified.
                     * @param message Audio
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: ntx.v2t.engine.Event.Audio, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Audio to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Meta. */
                interface IMeta {

                    /** Meta confidence */
                    confidence?: ntx.v2t.engine.Event.Meta.IConfidence;
                }

                /** Represents a Meta. */
                class Meta {

                    /**
                     * Constructs a new Meta.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: ntx.v2t.engine.Event.IMeta);

                    /** Meta confidence. */
                    public confidence?: (ntx.v2t.engine.Event.Meta.IConfidence|null);

                    /** Meta body. */
                    public body?: string;

                    /**
                     * Creates a new Meta instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Meta instance
                     */
                    public static create(properties?: ntx.v2t.engine.Event.IMeta): ntx.v2t.engine.Event.Meta;

                    /**
                     * Encodes the specified Meta message. Does not implicitly {@link ntx.v2t.engine.Event.Meta.verify|verify} messages.
                     * @param message Meta message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: ntx.v2t.engine.Event.IMeta, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Meta message, length delimited. Does not implicitly {@link ntx.v2t.engine.Event.Meta.verify|verify} messages.
                     * @param message Meta message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: ntx.v2t.engine.Event.IMeta, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Meta message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Meta
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ntx.v2t.engine.Event.Meta;

                    /**
                     * Decodes a Meta message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Meta
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ntx.v2t.engine.Event.Meta;

                    /**
                     * Verifies a Meta message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Meta message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Meta
                     */
                    public static fromObject(object: { [k: string]: any }): ntx.v2t.engine.Event.Meta;

                    /**
                     * Creates a plain object from a Meta message. Also converts values to other types if specified.
                     * @param message Meta
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: ntx.v2t.engine.Event.Meta, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Meta to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Meta {

                    /** Properties of a Confidence. */
                    interface IConfidence {

                        /** Confidence value */
                        value?: number;
                    }

                    /** Represents a Confidence. */
                    class Confidence {

                        /**
                         * Constructs a new Confidence.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: ntx.v2t.engine.Event.Meta.IConfidence);

                        /** Confidence value. */
                        public value: number;

                        /**
                         * Creates a new Confidence instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Confidence instance
                         */
                        public static create(properties?: ntx.v2t.engine.Event.Meta.IConfidence): ntx.v2t.engine.Event.Meta.Confidence;

                        /**
                         * Encodes the specified Confidence message. Does not implicitly {@link ntx.v2t.engine.Event.Meta.Confidence.verify|verify} messages.
                         * @param message Confidence message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: ntx.v2t.engine.Event.Meta.IConfidence, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Confidence message, length delimited. Does not implicitly {@link ntx.v2t.engine.Event.Meta.Confidence.verify|verify} messages.
                         * @param message Confidence message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: ntx.v2t.engine.Event.Meta.IConfidence, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Confidence message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Confidence
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ntx.v2t.engine.Event.Meta.Confidence;

                        /**
                         * Decodes a Confidence message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Confidence
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ntx.v2t.engine.Event.Meta.Confidence;

                        /**
                         * Verifies a Confidence message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Confidence message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Confidence
                         */
                        public static fromObject(object: { [k: string]: any }): ntx.v2t.engine.Event.Meta.Confidence;

                        /**
                         * Creates a plain object from a Confidence message. Also converts values to other types if specified.
                         * @param message Confidence
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: ntx.v2t.engine.Event.Meta.Confidence, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Confidence to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }
            }

            /** Properties of an Events. */
            interface IEvents {

                /** Events events */
                events?: ntx.v2t.engine.IEvent[];

                /** Events lookahead */
                lookahead?: boolean;

                /** Events receivedAt */
                receivedAt?: (number|Long);

                /** Events channelId */
                channelId?: number;
            }

            /** Represents an Events. */
            class Events {

                /**
                 * Constructs a new Events.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: ntx.v2t.engine.IEvents);

                /** Events events. */
                public events: ntx.v2t.engine.IEvent[];

                /** Events lookahead. */
                public lookahead: boolean;

                /** Events receivedAt. */
                public receivedAt: (number|Long);

                /** Events channelId. */
                public channelId: number;

                /**
                 * Creates a new Events instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Events instance
                 */
                public static create(properties?: ntx.v2t.engine.IEvents): ntx.v2t.engine.Events;

                /**
                 * Encodes the specified Events message. Does not implicitly {@link ntx.v2t.engine.Events.verify|verify} messages.
                 * @param message Events message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: ntx.v2t.engine.IEvents, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Events message, length delimited. Does not implicitly {@link ntx.v2t.engine.Events.verify|verify} messages.
                 * @param message Events message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: ntx.v2t.engine.IEvents, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Events message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Events
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ntx.v2t.engine.Events;

                /**
                 * Decodes an Events message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Events
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ntx.v2t.engine.Events;

                /**
                 * Verifies an Events message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Events message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Events
                 */
                public static fromObject(object: { [k: string]: any }): ntx.v2t.engine.Events;

                /**
                 * Creates a plain object from an Events message. Also converts values to other types if specified.
                 * @param message Events
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: ntx.v2t.engine.Events, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Events to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** EngineModule enum. */
            enum EngineModule {
                MODULE_NONE = 0,
                MODULE_VAD = 1,
                MODULE_V2T = 5,
                MODULE_PPC = 11
            }

            /** Properties of a Lexicon. */
            interface ILexicon {

                /** Lexicon alpha */
                alpha?: ntx.v2t.engine.Lexicon.Alphabet;

                /** Lexicon items */
                items?: ntx.v2t.engine.Lexicon.ILexItem[];
            }

            /** Represents a Lexicon. */
            class Lexicon {

                /**
                 * Constructs a new Lexicon.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: ntx.v2t.engine.ILexicon);

                /** Lexicon alpha. */
                public alpha: ntx.v2t.engine.Lexicon.Alphabet;

                /** Lexicon items. */
                public items: ntx.v2t.engine.Lexicon.ILexItem[];

                /**
                 * Creates a new Lexicon instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Lexicon instance
                 */
                public static create(properties?: ntx.v2t.engine.ILexicon): ntx.v2t.engine.Lexicon;

                /**
                 * Encodes the specified Lexicon message. Does not implicitly {@link ntx.v2t.engine.Lexicon.verify|verify} messages.
                 * @param message Lexicon message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: ntx.v2t.engine.ILexicon, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Lexicon message, length delimited. Does not implicitly {@link ntx.v2t.engine.Lexicon.verify|verify} messages.
                 * @param message Lexicon message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: ntx.v2t.engine.ILexicon, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Lexicon message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Lexicon
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ntx.v2t.engine.Lexicon;

                /**
                 * Decodes a Lexicon message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Lexicon
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ntx.v2t.engine.Lexicon;

                /**
                 * Verifies a Lexicon message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Lexicon message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Lexicon
                 */
                public static fromObject(object: { [k: string]: any }): ntx.v2t.engine.Lexicon;

                /**
                 * Creates a plain object from a Lexicon message. Also converts values to other types if specified.
                 * @param message Lexicon
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: ntx.v2t.engine.Lexicon, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Lexicon to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace Lexicon {

                /** Alphabet enum. */
                enum Alphabet {
                    LEXICON_ALPHABET_NONE = 0,
                    LEXICON_ALPHABET_CZ48 = 1,
                    LEXICON_ALPHABET_SK48 = 2,
                    LEXICON_ALPHABET_HR39 = 3,
                    LEXICON_ALPHABET_SL39 = 4,
                    LEXICON_ALPHABET_PL42 = 5
                }

                /** Properties of a UserItem. */
                interface IUserItem {

                    /** UserItem sym */
                    sym?: string;

                    /** UserItem pron */
                    pron?: string;
                }

                /** Represents a UserItem. */
                class UserItem {

                    /**
                     * Constructs a new UserItem.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: ntx.v2t.engine.Lexicon.IUserItem);

                    /** UserItem sym. */
                    public sym: string;

                    /** UserItem pron. */
                    public pron: string;

                    /**
                     * Creates a new UserItem instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UserItem instance
                     */
                    public static create(properties?: ntx.v2t.engine.Lexicon.IUserItem): ntx.v2t.engine.Lexicon.UserItem;

                    /**
                     * Encodes the specified UserItem message. Does not implicitly {@link ntx.v2t.engine.Lexicon.UserItem.verify|verify} messages.
                     * @param message UserItem message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: ntx.v2t.engine.Lexicon.IUserItem, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UserItem message, length delimited. Does not implicitly {@link ntx.v2t.engine.Lexicon.UserItem.verify|verify} messages.
                     * @param message UserItem message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: ntx.v2t.engine.Lexicon.IUserItem, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a UserItem message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UserItem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ntx.v2t.engine.Lexicon.UserItem;

                    /**
                     * Decodes a UserItem message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UserItem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ntx.v2t.engine.Lexicon.UserItem;

                    /**
                     * Verifies a UserItem message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a UserItem message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UserItem
                     */
                    public static fromObject(object: { [k: string]: any }): ntx.v2t.engine.Lexicon.UserItem;

                    /**
                     * Creates a plain object from a UserItem message. Also converts values to other types if specified.
                     * @param message UserItem
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: ntx.v2t.engine.Lexicon.UserItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UserItem to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a NoiseItem. */
                interface INoiseItem {

                    /** NoiseItem sym */
                    sym?: string;

                    /** NoiseItem pron */
                    pron?: string;
                }

                /** Represents a NoiseItem. */
                class NoiseItem {

                    /**
                     * Constructs a new NoiseItem.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: ntx.v2t.engine.Lexicon.INoiseItem);

                    /** NoiseItem sym. */
                    public sym: string;

                    /** NoiseItem pron. */
                    public pron: string;

                    /**
                     * Creates a new NoiseItem instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NoiseItem instance
                     */
                    public static create(properties?: ntx.v2t.engine.Lexicon.INoiseItem): ntx.v2t.engine.Lexicon.NoiseItem;

                    /**
                     * Encodes the specified NoiseItem message. Does not implicitly {@link ntx.v2t.engine.Lexicon.NoiseItem.verify|verify} messages.
                     * @param message NoiseItem message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: ntx.v2t.engine.Lexicon.INoiseItem, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NoiseItem message, length delimited. Does not implicitly {@link ntx.v2t.engine.Lexicon.NoiseItem.verify|verify} messages.
                     * @param message NoiseItem message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: ntx.v2t.engine.Lexicon.INoiseItem, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NoiseItem message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NoiseItem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ntx.v2t.engine.Lexicon.NoiseItem;

                    /**
                     * Decodes a NoiseItem message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NoiseItem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ntx.v2t.engine.Lexicon.NoiseItem;

                    /**
                     * Verifies a NoiseItem message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NoiseItem message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NoiseItem
                     */
                    public static fromObject(object: { [k: string]: any }): ntx.v2t.engine.Lexicon.NoiseItem;

                    /**
                     * Creates a plain object from a NoiseItem message. Also converts values to other types if specified.
                     * @param message NoiseItem
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: ntx.v2t.engine.Lexicon.NoiseItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NoiseItem to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MainItem. */
                interface IMainItem {

                    /** MainItem sym */
                    sym?: string;

                    /** MainItem pron */
                    pron?: string;

                    /** MainItem mnt */
                    mnt?: string;
                }

                /** Represents a MainItem. */
                class MainItem {

                    /**
                     * Constructs a new MainItem.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: ntx.v2t.engine.Lexicon.IMainItem);

                    /** MainItem sym. */
                    public sym: string;

                    /** MainItem pron. */
                    public pron: string;

                    /** MainItem mnt. */
                    public mnt: string;

                    /**
                     * Creates a new MainItem instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MainItem instance
                     */
                    public static create(properties?: ntx.v2t.engine.Lexicon.IMainItem): ntx.v2t.engine.Lexicon.MainItem;

                    /**
                     * Encodes the specified MainItem message. Does not implicitly {@link ntx.v2t.engine.Lexicon.MainItem.verify|verify} messages.
                     * @param message MainItem message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: ntx.v2t.engine.Lexicon.IMainItem, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MainItem message, length delimited. Does not implicitly {@link ntx.v2t.engine.Lexicon.MainItem.verify|verify} messages.
                     * @param message MainItem message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: ntx.v2t.engine.Lexicon.IMainItem, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MainItem message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MainItem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ntx.v2t.engine.Lexicon.MainItem;

                    /**
                     * Decodes a MainItem message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MainItem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ntx.v2t.engine.Lexicon.MainItem;

                    /**
                     * Verifies a MainItem message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MainItem message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MainItem
                     */
                    public static fromObject(object: { [k: string]: any }): ntx.v2t.engine.Lexicon.MainItem;

                    /**
                     * Creates a plain object from a MainItem message. Also converts values to other types if specified.
                     * @param message MainItem
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: ntx.v2t.engine.Lexicon.MainItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MainItem to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a LexItem. */
                interface ILexItem {

                    /** LexItem user */
                    user?: ntx.v2t.engine.Lexicon.IUserItem;

                    /** LexItem main */
                    main?: ntx.v2t.engine.Lexicon.IMainItem;

                    /** LexItem noise */
                    noise?: ntx.v2t.engine.Lexicon.INoiseItem;
                }

                /** Represents a LexItem. */
                class LexItem {

                    /**
                     * Constructs a new LexItem.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: ntx.v2t.engine.Lexicon.ILexItem);

                    /** LexItem user. */
                    public user?: (ntx.v2t.engine.Lexicon.IUserItem|null);

                    /** LexItem main. */
                    public main?: (ntx.v2t.engine.Lexicon.IMainItem|null);

                    /** LexItem noise. */
                    public noise?: (ntx.v2t.engine.Lexicon.INoiseItem|null);

                    /** LexItem item. */
                    public item?: string;

                    /**
                     * Creates a new LexItem instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LexItem instance
                     */
                    public static create(properties?: ntx.v2t.engine.Lexicon.ILexItem): ntx.v2t.engine.Lexicon.LexItem;

                    /**
                     * Encodes the specified LexItem message. Does not implicitly {@link ntx.v2t.engine.Lexicon.LexItem.verify|verify} messages.
                     * @param message LexItem message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: ntx.v2t.engine.Lexicon.ILexItem, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LexItem message, length delimited. Does not implicitly {@link ntx.v2t.engine.Lexicon.LexItem.verify|verify} messages.
                     * @param message LexItem message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: ntx.v2t.engine.Lexicon.ILexItem, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LexItem message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LexItem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ntx.v2t.engine.Lexicon.LexItem;

                    /**
                     * Decodes a LexItem message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LexItem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ntx.v2t.engine.Lexicon.LexItem;

                    /**
                     * Verifies a LexItem message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LexItem message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LexItem
                     */
                    public static fromObject(object: { [k: string]: any }): ntx.v2t.engine.Lexicon.LexItem;

                    /**
                     * Creates a plain object from a LexItem message. Also converts values to other types if specified.
                     * @param message LexItem
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: ntx.v2t.engine.Lexicon.LexItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LexItem to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of an AudioFormat. */
            interface IAudioFormat {

                /** AudioFormat auto */
                auto?: ntx.v2t.engine.AudioFormat.IAutoDetect;

                /** AudioFormat pcm */
                pcm?: ntx.v2t.engine.AudioFormat.IPCM;

                /** AudioFormat header */
                header?: ntx.v2t.engine.AudioFormat.IHeader;
            }

            /** Represents an AudioFormat. */
            class AudioFormat {

                /**
                 * Constructs a new AudioFormat.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: ntx.v2t.engine.IAudioFormat);

                /** AudioFormat auto. */
                public auto?: (ntx.v2t.engine.AudioFormat.IAutoDetect|null);

                /** AudioFormat pcm. */
                public pcm?: (ntx.v2t.engine.AudioFormat.IPCM|null);

                /** AudioFormat header. */
                public header?: (ntx.v2t.engine.AudioFormat.IHeader|null);

                /** AudioFormat formats. */
                public formats?: string;

                /**
                 * Creates a new AudioFormat instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AudioFormat instance
                 */
                public static create(properties?: ntx.v2t.engine.IAudioFormat): ntx.v2t.engine.AudioFormat;

                /**
                 * Encodes the specified AudioFormat message. Does not implicitly {@link ntx.v2t.engine.AudioFormat.verify|verify} messages.
                 * @param message AudioFormat message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: ntx.v2t.engine.IAudioFormat, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AudioFormat message, length delimited. Does not implicitly {@link ntx.v2t.engine.AudioFormat.verify|verify} messages.
                 * @param message AudioFormat message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: ntx.v2t.engine.IAudioFormat, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AudioFormat message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AudioFormat
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ntx.v2t.engine.AudioFormat;

                /**
                 * Decodes an AudioFormat message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AudioFormat
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ntx.v2t.engine.AudioFormat;

                /**
                 * Verifies an AudioFormat message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AudioFormat message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AudioFormat
                 */
                public static fromObject(object: { [k: string]: any }): ntx.v2t.engine.AudioFormat;

                /**
                 * Creates a plain object from an AudioFormat message. Also converts values to other types if specified.
                 * @param message AudioFormat
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: ntx.v2t.engine.AudioFormat, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AudioFormat to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace AudioFormat {

                /** ChannelLayout enum. */
                enum ChannelLayout {
                    AUDIO_CHANNEL_LAYOUT_NONE = 0,
                    AUDIO_CHANNEL_LAYOUT_MONO = 1,
                    AUDIO_CHANNEL_LAYOUT_STEREO = 2
                }

                /** SampleFormat enum. */
                enum SampleFormat {
                    AUDIO_SAMPLE_FORMAT_NONE = 0,
                    AUDIO_SAMPLE_FORMAT_ALAW = 1,
                    AUDIO_SAMPLE_FORMAT_F32BE = 2,
                    AUDIO_SAMPLE_FORMAT_F32LE = 3,
                    AUDIO_SAMPLE_FORMAT_F64BE = 4,
                    AUDIO_SAMPLE_FORMAT_F64LE = 5,
                    AUDIO_SAMPLE_FORMAT_MULAW = 6,
                    AUDIO_SAMPLE_FORMAT_S16BE = 7,
                    AUDIO_SAMPLE_FORMAT_S16LE = 8,
                    AUDIO_SAMPLE_FORMAT_S24BE = 9,
                    AUDIO_SAMPLE_FORMAT_S24LE = 10,
                    AUDIO_SAMPLE_FORMAT_S32BE = 11,
                    AUDIO_SAMPLE_FORMAT_S32LE = 12,
                    AUDIO_SAMPLE_FORMAT_S8 = 13,
                    AUDIO_SAMPLE_FORMAT_U16BE = 14,
                    AUDIO_SAMPLE_FORMAT_U16LE = 15,
                    AUDIO_SAMPLE_FORMAT_U24BE = 16,
                    AUDIO_SAMPLE_FORMAT_U24LE = 17,
                    AUDIO_SAMPLE_FORMAT_U32BE = 18,
                    AUDIO_SAMPLE_FORMAT_U32LE = 19,
                    AUDIO_SAMPLE_FORMAT_U8 = 20
                }

                /** SampleRate enum. */
                enum SampleRate {
                    AUDIO_SAMPLE_RATE_NONE = 0,
                    AUDIO_SAMPLE_RATE_8000 = 1,
                    AUDIO_SAMPLE_RATE_16000 = 2,
                    AUDIO_SAMPLE_RATE_32000 = 3,
                    AUDIO_SAMPLE_RATE_48000 = 4,
                    AUDIO_SAMPLE_RATE_96000 = 5,
                    AUDIO_SAMPLE_RATE_11025 = 6,
                    AUDIO_SAMPLE_RATE_22050 = 7,
                    AUDIO_SAMPLE_RATE_44100 = 8
                }

                /** Properties of an AutoDetect. */
                interface IAutoDetect {

                    /** AutoDetect probeSizeBytes */
                    probeSizeBytes?: number;
                }

                /** Represents an AutoDetect. */
                class AutoDetect {

                    /**
                     * Constructs a new AutoDetect.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: ntx.v2t.engine.AudioFormat.IAutoDetect);

                    /** AutoDetect probeSizeBytes. */
                    public probeSizeBytes: number;

                    /**
                     * Creates a new AutoDetect instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AutoDetect instance
                     */
                    public static create(properties?: ntx.v2t.engine.AudioFormat.IAutoDetect): ntx.v2t.engine.AudioFormat.AutoDetect;

                    /**
                     * Encodes the specified AutoDetect message. Does not implicitly {@link ntx.v2t.engine.AudioFormat.AutoDetect.verify|verify} messages.
                     * @param message AutoDetect message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: ntx.v2t.engine.AudioFormat.IAutoDetect, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AutoDetect message, length delimited. Does not implicitly {@link ntx.v2t.engine.AudioFormat.AutoDetect.verify|verify} messages.
                     * @param message AutoDetect message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: ntx.v2t.engine.AudioFormat.IAutoDetect, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AutoDetect message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AutoDetect
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ntx.v2t.engine.AudioFormat.AutoDetect;

                    /**
                     * Decodes an AutoDetect message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AutoDetect
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ntx.v2t.engine.AudioFormat.AutoDetect;

                    /**
                     * Verifies an AutoDetect message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AutoDetect message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AutoDetect
                     */
                    public static fromObject(object: { [k: string]: any }): ntx.v2t.engine.AudioFormat.AutoDetect;

                    /**
                     * Creates a plain object from an AutoDetect message. Also converts values to other types if specified.
                     * @param message AutoDetect
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: ntx.v2t.engine.AudioFormat.AutoDetect, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AutoDetect to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PCM. */
                interface IPCM {

                    /** PCM sampleFormat */
                    sampleFormat?: ntx.v2t.engine.AudioFormat.SampleFormat;

                    /** PCM sampleRate */
                    sampleRate?: ntx.v2t.engine.AudioFormat.SampleRate;

                    /** PCM channelLayout */
                    channelLayout?: ntx.v2t.engine.AudioFormat.ChannelLayout;
                }

                /** Represents a PCM. */
                class PCM {

                    /**
                     * Constructs a new PCM.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: ntx.v2t.engine.AudioFormat.IPCM);

                    /** PCM sampleFormat. */
                    public sampleFormat: ntx.v2t.engine.AudioFormat.SampleFormat;

                    /** PCM sampleRate. */
                    public sampleRate: ntx.v2t.engine.AudioFormat.SampleRate;

                    /** PCM channelLayout. */
                    public channelLayout: ntx.v2t.engine.AudioFormat.ChannelLayout;

                    /**
                     * Creates a new PCM instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PCM instance
                     */
                    public static create(properties?: ntx.v2t.engine.AudioFormat.IPCM): ntx.v2t.engine.AudioFormat.PCM;

                    /**
                     * Encodes the specified PCM message. Does not implicitly {@link ntx.v2t.engine.AudioFormat.PCM.verify|verify} messages.
                     * @param message PCM message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: ntx.v2t.engine.AudioFormat.IPCM, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PCM message, length delimited. Does not implicitly {@link ntx.v2t.engine.AudioFormat.PCM.verify|verify} messages.
                     * @param message PCM message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: ntx.v2t.engine.AudioFormat.IPCM, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PCM message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PCM
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ntx.v2t.engine.AudioFormat.PCM;

                    /**
                     * Decodes a PCM message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PCM
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ntx.v2t.engine.AudioFormat.PCM;

                    /**
                     * Verifies a PCM message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PCM message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PCM
                     */
                    public static fromObject(object: { [k: string]: any }): ntx.v2t.engine.AudioFormat.PCM;

                    /**
                     * Creates a plain object from a PCM message. Also converts values to other types if specified.
                     * @param message PCM
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: ntx.v2t.engine.AudioFormat.PCM, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PCM to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Header. */
                interface IHeader {

                    /** Header header */
                    header?: Uint8Array;
                }

                /** Represents a Header. */
                class Header {

                    /**
                     * Constructs a new Header.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: ntx.v2t.engine.AudioFormat.IHeader);

                    /** Header header. */
                    public header: Uint8Array;

                    /**
                     * Creates a new Header instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Header instance
                     */
                    public static create(properties?: ntx.v2t.engine.AudioFormat.IHeader): ntx.v2t.engine.AudioFormat.Header;

                    /**
                     * Encodes the specified Header message. Does not implicitly {@link ntx.v2t.engine.AudioFormat.Header.verify|verify} messages.
                     * @param message Header message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: ntx.v2t.engine.AudioFormat.IHeader, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Header message, length delimited. Does not implicitly {@link ntx.v2t.engine.AudioFormat.Header.verify|verify} messages.
                     * @param message Header message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: ntx.v2t.engine.AudioFormat.IHeader, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Header message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Header
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ntx.v2t.engine.AudioFormat.Header;

                    /**
                     * Decodes a Header message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Header
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ntx.v2t.engine.AudioFormat.Header;

                    /**
                     * Verifies a Header message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Header message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Header
                     */
                    public static fromObject(object: { [k: string]: any }): ntx.v2t.engine.AudioFormat.Header;

                    /**
                     * Creates a plain object from a Header message. Also converts values to other types if specified.
                     * @param message Header
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: ntx.v2t.engine.AudioFormat.Header, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Header to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of an EngineContext. */
            interface IEngineContext {

                /** EngineContext audioFormat */
                audioFormat?: ntx.v2t.engine.IAudioFormat;

                /** EngineContext audioChannel */
                audioChannel?: ntx.v2t.engine.EngineContext.AudioChannel;

                /** EngineContext vad */
                vad?: ntx.v2t.engine.EngineContext.IVADConfig;

                /** EngineContext v2t */
                v2t?: ntx.v2t.engine.EngineContext.IV2TConfig;

                /** EngineContext ppc */
                ppc?: ntx.v2t.engine.EngineContext.IPPCConfig;
            }

            /** Represents an EngineContext. */
            class EngineContext {

                /**
                 * Constructs a new EngineContext.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: ntx.v2t.engine.IEngineContext);

                /** EngineContext audioFormat. */
                public audioFormat?: (ntx.v2t.engine.IAudioFormat|null);

                /** EngineContext audioChannel. */
                public audioChannel: ntx.v2t.engine.EngineContext.AudioChannel;

                /** EngineContext vad. */
                public vad?: (ntx.v2t.engine.EngineContext.IVADConfig|null);

                /** EngineContext v2t. */
                public v2t?: (ntx.v2t.engine.EngineContext.IV2TConfig|null);

                /** EngineContext ppc. */
                public ppc?: (ntx.v2t.engine.EngineContext.IPPCConfig|null);

                /** EngineContext config. */
                public config?: string;

                /**
                 * Creates a new EngineContext instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EngineContext instance
                 */
                public static create(properties?: ntx.v2t.engine.IEngineContext): ntx.v2t.engine.EngineContext;

                /**
                 * Encodes the specified EngineContext message. Does not implicitly {@link ntx.v2t.engine.EngineContext.verify|verify} messages.
                 * @param message EngineContext message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: ntx.v2t.engine.IEngineContext, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EngineContext message, length delimited. Does not implicitly {@link ntx.v2t.engine.EngineContext.verify|verify} messages.
                 * @param message EngineContext message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: ntx.v2t.engine.IEngineContext, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EngineContext message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EngineContext
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ntx.v2t.engine.EngineContext;

                /**
                 * Decodes an EngineContext message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EngineContext
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ntx.v2t.engine.EngineContext;

                /**
                 * Verifies an EngineContext message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EngineContext message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EngineContext
                 */
                public static fromObject(object: { [k: string]: any }): ntx.v2t.engine.EngineContext;

                /**
                 * Creates a plain object from an EngineContext message. Also converts values to other types if specified.
                 * @param message EngineContext
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: ntx.v2t.engine.EngineContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EngineContext to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace EngineContext {

                /** Properties of a VADConfig. */
                interface IVADConfig {
                }

                /** Represents a VADConfig. */
                class VADConfig {

                    /**
                     * Constructs a new VADConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: ntx.v2t.engine.EngineContext.IVADConfig);

                    /**
                     * Creates a new VADConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VADConfig instance
                     */
                    public static create(properties?: ntx.v2t.engine.EngineContext.IVADConfig): ntx.v2t.engine.EngineContext.VADConfig;

                    /**
                     * Encodes the specified VADConfig message. Does not implicitly {@link ntx.v2t.engine.EngineContext.VADConfig.verify|verify} messages.
                     * @param message VADConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: ntx.v2t.engine.EngineContext.IVADConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VADConfig message, length delimited. Does not implicitly {@link ntx.v2t.engine.EngineContext.VADConfig.verify|verify} messages.
                     * @param message VADConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: ntx.v2t.engine.EngineContext.IVADConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VADConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VADConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ntx.v2t.engine.EngineContext.VADConfig;

                    /**
                     * Decodes a VADConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VADConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ntx.v2t.engine.EngineContext.VADConfig;

                    /**
                     * Verifies a VADConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VADConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VADConfig
                     */
                    public static fromObject(object: { [k: string]: any }): ntx.v2t.engine.EngineContext.VADConfig;

                    /**
                     * Creates a plain object from a VADConfig message. Also converts values to other types if specified.
                     * @param message VADConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: ntx.v2t.engine.EngineContext.VADConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VADConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a V2TConfig. */
                interface IV2TConfig {

                    /** V2TConfig withVAD */
                    withVAD?: ntx.v2t.engine.EngineContext.IVADConfig;

                    /** V2TConfig withPPC */
                    withPPC?: ntx.v2t.engine.EngineContext.IPPCConfig;

                    /** V2TConfig withLexicon */
                    withLexicon?: ntx.v2t.engine.ILexicon;
                }

                /** Represents a V2TConfig. */
                class V2TConfig {

                    /**
                     * Constructs a new V2TConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: ntx.v2t.engine.EngineContext.IV2TConfig);

                    /** V2TConfig withVAD. */
                    public withVAD?: (ntx.v2t.engine.EngineContext.IVADConfig|null);

                    /** V2TConfig withPPC. */
                    public withPPC?: (ntx.v2t.engine.EngineContext.IPPCConfig|null);

                    /** V2TConfig withLexicon. */
                    public withLexicon?: (ntx.v2t.engine.ILexicon|null);

                    /**
                     * Creates a new V2TConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns V2TConfig instance
                     */
                    public static create(properties?: ntx.v2t.engine.EngineContext.IV2TConfig): ntx.v2t.engine.EngineContext.V2TConfig;

                    /**
                     * Encodes the specified V2TConfig message. Does not implicitly {@link ntx.v2t.engine.EngineContext.V2TConfig.verify|verify} messages.
                     * @param message V2TConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: ntx.v2t.engine.EngineContext.IV2TConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified V2TConfig message, length delimited. Does not implicitly {@link ntx.v2t.engine.EngineContext.V2TConfig.verify|verify} messages.
                     * @param message V2TConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: ntx.v2t.engine.EngineContext.IV2TConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a V2TConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns V2TConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ntx.v2t.engine.EngineContext.V2TConfig;

                    /**
                     * Decodes a V2TConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns V2TConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ntx.v2t.engine.EngineContext.V2TConfig;

                    /**
                     * Verifies a V2TConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a V2TConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns V2TConfig
                     */
                    public static fromObject(object: { [k: string]: any }): ntx.v2t.engine.EngineContext.V2TConfig;

                    /**
                     * Creates a plain object from a V2TConfig message. Also converts values to other types if specified.
                     * @param message V2TConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: ntx.v2t.engine.EngineContext.V2TConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this V2TConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PPCConfig. */
                interface IPPCConfig {
                }

                /** Represents a PPCConfig. */
                class PPCConfig {

                    /**
                     * Constructs a new PPCConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: ntx.v2t.engine.EngineContext.IPPCConfig);

                    /**
                     * Creates a new PPCConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PPCConfig instance
                     */
                    public static create(properties?: ntx.v2t.engine.EngineContext.IPPCConfig): ntx.v2t.engine.EngineContext.PPCConfig;

                    /**
                     * Encodes the specified PPCConfig message. Does not implicitly {@link ntx.v2t.engine.EngineContext.PPCConfig.verify|verify} messages.
                     * @param message PPCConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: ntx.v2t.engine.EngineContext.IPPCConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PPCConfig message, length delimited. Does not implicitly {@link ntx.v2t.engine.EngineContext.PPCConfig.verify|verify} messages.
                     * @param message PPCConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: ntx.v2t.engine.EngineContext.IPPCConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PPCConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PPCConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ntx.v2t.engine.EngineContext.PPCConfig;

                    /**
                     * Decodes a PPCConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PPCConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ntx.v2t.engine.EngineContext.PPCConfig;

                    /**
                     * Verifies a PPCConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PPCConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PPCConfig
                     */
                    public static fromObject(object: { [k: string]: any }): ntx.v2t.engine.EngineContext.PPCConfig;

                    /**
                     * Creates a plain object from a PPCConfig message. Also converts values to other types if specified.
                     * @param message PPCConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: ntx.v2t.engine.EngineContext.PPCConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PPCConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** AudioChannel enum. */
                enum AudioChannel {
                    AUDIO_CHANNEL_DOWNMIX = 0,
                    AUDIO_CHANNEL_LEFT = 1,
                    AUDIO_CHANNEL_RIGHT = 2
                }
            }

            /** Properties of an EngineContextStart. */
            interface IEngineContextStart {

                /** EngineContextStart context */
                context?: ntx.v2t.engine.IEngineContext;
            }

            /** Represents an EngineContextStart. */
            class EngineContextStart {

                /**
                 * Constructs a new EngineContextStart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: ntx.v2t.engine.IEngineContextStart);

                /** EngineContextStart context. */
                public context?: (ntx.v2t.engine.IEngineContext|null);

                /**
                 * Creates a new EngineContextStart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EngineContextStart instance
                 */
                public static create(properties?: ntx.v2t.engine.IEngineContextStart): ntx.v2t.engine.EngineContextStart;

                /**
                 * Encodes the specified EngineContextStart message. Does not implicitly {@link ntx.v2t.engine.EngineContextStart.verify|verify} messages.
                 * @param message EngineContextStart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: ntx.v2t.engine.IEngineContextStart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EngineContextStart message, length delimited. Does not implicitly {@link ntx.v2t.engine.EngineContextStart.verify|verify} messages.
                 * @param message EngineContextStart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: ntx.v2t.engine.IEngineContextStart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EngineContextStart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EngineContextStart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ntx.v2t.engine.EngineContextStart;

                /**
                 * Decodes an EngineContextStart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EngineContextStart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ntx.v2t.engine.EngineContextStart;

                /**
                 * Verifies an EngineContextStart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EngineContextStart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EngineContextStart
                 */
                public static fromObject(object: { [k: string]: any }): ntx.v2t.engine.EngineContextStart;

                /**
                 * Creates a plain object from an EngineContextStart message. Also converts values to other types if specified.
                 * @param message EngineContextStart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: ntx.v2t.engine.EngineContextStart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EngineContextStart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an EngineContextEnd. */
            interface IEngineContextEnd {

                /** EngineContextEnd error */
                error?: string;
            }

            /** Represents an EngineContextEnd. */
            class EngineContextEnd {

                /**
                 * Constructs a new EngineContextEnd.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: ntx.v2t.engine.IEngineContextEnd);

                /** EngineContextEnd error. */
                public error: string;

                /**
                 * Creates a new EngineContextEnd instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EngineContextEnd instance
                 */
                public static create(properties?: ntx.v2t.engine.IEngineContextEnd): ntx.v2t.engine.EngineContextEnd;

                /**
                 * Encodes the specified EngineContextEnd message. Does not implicitly {@link ntx.v2t.engine.EngineContextEnd.verify|verify} messages.
                 * @param message EngineContextEnd message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: ntx.v2t.engine.IEngineContextEnd, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EngineContextEnd message, length delimited. Does not implicitly {@link ntx.v2t.engine.EngineContextEnd.verify|verify} messages.
                 * @param message EngineContextEnd message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: ntx.v2t.engine.IEngineContextEnd, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EngineContextEnd message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EngineContextEnd
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ntx.v2t.engine.EngineContextEnd;

                /**
                 * Decodes an EngineContextEnd message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EngineContextEnd
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ntx.v2t.engine.EngineContextEnd;

                /**
                 * Verifies an EngineContextEnd message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EngineContextEnd message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EngineContextEnd
                 */
                public static fromObject(object: { [k: string]: any }): ntx.v2t.engine.EngineContextEnd;

                /**
                 * Creates a plain object from an EngineContextEnd message. Also converts values to other types if specified.
                 * @param message EngineContextEnd
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: ntx.v2t.engine.EngineContextEnd, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EngineContextEnd to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an EventsPush. */
            interface IEventsPush {

                /** EventsPush events */
                events?: ntx.v2t.engine.IEvents;
            }

            /** Represents an EventsPush. */
            class EventsPush {

                /**
                 * Constructs a new EventsPush.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: ntx.v2t.engine.IEventsPush);

                /** EventsPush events. */
                public events?: (ntx.v2t.engine.IEvents|null);

                /**
                 * Creates a new EventsPush instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EventsPush instance
                 */
                public static create(properties?: ntx.v2t.engine.IEventsPush): ntx.v2t.engine.EventsPush;

                /**
                 * Encodes the specified EventsPush message. Does not implicitly {@link ntx.v2t.engine.EventsPush.verify|verify} messages.
                 * @param message EventsPush message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: ntx.v2t.engine.IEventsPush, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EventsPush message, length delimited. Does not implicitly {@link ntx.v2t.engine.EventsPush.verify|verify} messages.
                 * @param message EventsPush message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: ntx.v2t.engine.IEventsPush, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EventsPush message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EventsPush
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ntx.v2t.engine.EventsPush;

                /**
                 * Decodes an EventsPush message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EventsPush
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ntx.v2t.engine.EventsPush;

                /**
                 * Verifies an EventsPush message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EventsPush message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EventsPush
                 */
                public static fromObject(object: { [k: string]: any }): ntx.v2t.engine.EventsPush;

                /**
                 * Creates a plain object from an EventsPush message. Also converts values to other types if specified.
                 * @param message EventsPush
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: ntx.v2t.engine.EventsPush, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EventsPush to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an EventsPull. */
            interface IEventsPull {
            }

            /** Represents an EventsPull. */
            class EventsPull {

                /**
                 * Constructs a new EventsPull.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: ntx.v2t.engine.IEventsPull);

                /**
                 * Creates a new EventsPull instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EventsPull instance
                 */
                public static create(properties?: ntx.v2t.engine.IEventsPull): ntx.v2t.engine.EventsPull;

                /**
                 * Encodes the specified EventsPull message. Does not implicitly {@link ntx.v2t.engine.EventsPull.verify|verify} messages.
                 * @param message EventsPull message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: ntx.v2t.engine.IEventsPull, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EventsPull message, length delimited. Does not implicitly {@link ntx.v2t.engine.EventsPull.verify|verify} messages.
                 * @param message EventsPull message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: ntx.v2t.engine.IEventsPull, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EventsPull message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EventsPull
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ntx.v2t.engine.EventsPull;

                /**
                 * Decodes an EventsPull message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EventsPull
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ntx.v2t.engine.EventsPull;

                /**
                 * Verifies an EventsPull message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EventsPull message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EventsPull
                 */
                public static fromObject(object: { [k: string]: any }): ntx.v2t.engine.EventsPull;

                /**
                 * Creates a plain object from an EventsPull message. Also converts values to other types if specified.
                 * @param message EventsPull
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: ntx.v2t.engine.EventsPull, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EventsPull to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an EngineStream. */
            interface IEngineStream {

                /** EngineStream start */
                start?: ntx.v2t.engine.IEngineContextStart;

                /** EngineStream push */
                push?: ntx.v2t.engine.IEventsPush;

                /** EngineStream pull */
                pull?: ntx.v2t.engine.IEventsPull;

                /** EngineStream end */
                end?: ntx.v2t.engine.IEngineContextEnd;
            }

            /** Represents an EngineStream. */
            class EngineStream {

                /**
                 * Constructs a new EngineStream.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: ntx.v2t.engine.IEngineStream);

                /** EngineStream start. */
                public start?: (ntx.v2t.engine.IEngineContextStart|null);

                /** EngineStream push. */
                public push?: (ntx.v2t.engine.IEventsPush|null);

                /** EngineStream pull. */
                public pull?: (ntx.v2t.engine.IEventsPull|null);

                /** EngineStream end. */
                public end?: (ntx.v2t.engine.IEngineContextEnd|null);

                /** EngineStream payload. */
                public payload?: string;

                /**
                 * Creates a new EngineStream instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EngineStream instance
                 */
                public static create(properties?: ntx.v2t.engine.IEngineStream): ntx.v2t.engine.EngineStream;

                /**
                 * Encodes the specified EngineStream message. Does not implicitly {@link ntx.v2t.engine.EngineStream.verify|verify} messages.
                 * @param message EngineStream message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: ntx.v2t.engine.IEngineStream, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EngineStream message, length delimited. Does not implicitly {@link ntx.v2t.engine.EngineStream.verify|verify} messages.
                 * @param message EngineStream message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: ntx.v2t.engine.IEngineStream, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EngineStream message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EngineStream
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ntx.v2t.engine.EngineStream;

                /**
                 * Decodes an EngineStream message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EngineStream
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ntx.v2t.engine.EngineStream;

                /**
                 * Verifies an EngineStream message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EngineStream message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EngineStream
                 */
                public static fromObject(object: { [k: string]: any }): ntx.v2t.engine.EngineStream;

                /**
                 * Creates a plain object from an EngineStream message. Also converts values to other types if specified.
                 * @param message EngineStream
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: ntx.v2t.engine.EngineStream, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EngineStream to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Represents an EngineService */
            class EngineService extends $protobuf.rpc.Service {

                /**
                 * Constructs a new EngineService service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new EngineService service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): EngineService;

                /**
                 * Calls StreamingRecognize.
                 * @param request EngineStream message or plain object
                 * @param callback Node-style callback called with the error, if any, and EngineStream
                 */
                public streamingRecognize(request: ntx.v2t.engine.IEngineStream, callback: ntx.v2t.engine.EngineService.StreamingRecognizeCallback): void;

                /**
                 * Calls StreamingRecognize.
                 * @param request EngineStream message or plain object
                 * @returns Promise
                 */
                public streamingRecognize(request: ntx.v2t.engine.IEngineStream): Promise<ntx.v2t.engine.EngineStream>;
            }

            namespace EngineService {

                /**
                 * Callback as used by {@link ntx.v2t.engine.EngineService#streamingRecognize}.
                 * @param error Error, if any
                 * @param [response] EngineStream
                 */
                type StreamingRecognizeCallback = (error: (Error|null), response?: ntx.v2t.engine.EngineStream) => void;
            }
        }
    }
}
