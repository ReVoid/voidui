export interface IVoNotificationBarItem {
  Props: {
  type: 'Success' | 'Error' | "Warning" | "Info";
  duration?: number;
  title?: string;
  message?: string;
};

  Emits: {

  };

  Slots: {

  }
}
