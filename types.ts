export interface VideoProgressEvent {
    userId?: number;

    mediaClipId: string;

    progress: 40 | 100;

    timestamp: Date;
}