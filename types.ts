export interface VideoProgressEvent {
    userId?: string;

    mediaClipId: string;

    progress: 40 | 100;

    timestamp: Date;
}