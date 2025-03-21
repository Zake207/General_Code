/**
 * Class that allows notifications by email to be sent
 */
class EmailService {
  /**
   * Method that sends a notification by email
   * @param message Message to be sent
   * @returns Message sent
   */
  notify(message: string): string {
    return `Sending notification by email: ${message}`;
  }
}

/**
 * Class that allows notifications by SMS to be sent
 */
class ShortMessageService {
  /**
   * Method that sends a notification by SMS
   * @param message Message to be sent
   * @returns Message sent
   */
  notify(message: string): string {
    return `Sending notification by SMS: ${message}`;
  }
}

/**
 * Class that allows notifications to be sent by email
 */
export class EmailNotifier {
  /**
   * Constructor of the class
   * @param notificationService Service that allows notifications to be sent by email
   */
  constructor(private notificationService: EmailService) {}

  /**
   * Method that sends a notification by email
   * @param message Message to be sent
   */
  sendNotification(message: string): void {
    this.notificationService.notify(message);
  }
}

/**
 * Class that allows notifications to be sent by SMS
 */
export class ShortMessageNotifier {
  /**
   * Constructor of the class
   * @param notificationService Service that allows notifications to be sent by SMS
   */
  constructor(private notificationService: ShortMessageService) {}

  /**
   * Method that sends a notification by SMS
   * @param message Message to be sent
   */
  sendNotification(message: string): void {
    this.notificationService.notify(message);
  }
}

// // Client code
// const emailNotifier = new EmailNotifier(new EmailService());
// emailNotifier.sendNotification("Hello World!");

// const shortMessageNotifier = new ShortMessageNotifier(new ShortMessageService(),);
// shortMessageNotifier.sendNotification("Hello World!");
