"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShortMessageNotifier = exports.EmailNotifier = void 0;
/**
 * Class that allows notifications by email to be sent
 */
class EmailService {
    /**
     * Method that sends a notification by email
     * @param message Message to be sent
     * @returns Message sent
     */
    notify(message) {
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
    notify(message) {
        return `Sending notification by SMS: ${message}`;
    }
}
/**
 * Class that allows notifications to be sent by email
 */
class EmailNotifier {
    /**
     * Constructor of the class
     * @param notificationService Service that allows notifications to be sent by email
     */
    constructor(notificationService) {
        this.notificationService = notificationService;
    }
    /**
     * Method that sends a notification by email
     * @param message Message to be sent
     */
    sendNotification(message) {
        this.notificationService.notify(message);
    }
}
exports.EmailNotifier = EmailNotifier;
/**
 * Class that allows notifications to be sent by SMS
 */
class ShortMessageNotifier {
    /**
     * Constructor of the class
     * @param notificationService Service that allows notifications to be sent by SMS
     */
    constructor(notificationService) {
        this.notificationService = notificationService;
    }
    /**
     * Method that sends a notification by SMS
     * @param message Message to be sent
     */
    sendNotification(message) {
        this.notificationService.notify(message);
    }
}
exports.ShortMessageNotifier = ShortMessageNotifier;
// // Client code
// const emailNotifier = new EmailNotifier(new EmailService());
// emailNotifier.sendNotification("Hello World!");
// const shortMessageNotifier = new ShortMessageNotifier(new ShortMessageService(),);
// shortMessageNotifier.sendNotification("Hello World!");
