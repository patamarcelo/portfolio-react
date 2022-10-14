import "react-notifications/lib/notifications.css";
import { NotificationManager } from "react-notifications";
export const createNotification = (type, msg, subMsg) => {
	switch (type) {
		case "info":
			console.log("indoodododo");
			NotificationManager.info("Info message");
			break;
		case "success":
			NotificationManager.success("Success message", "Title here");
			break;
		case "warning":
			NotificationManager.warning(msg, subMsg, 3000);
			break;
		case "error":
			NotificationManager.error(
				"Error message",
				"Click me!",
				5000,
				() => {
					alert("callback");
				}
			);
			break;
		default:
			break;
	}
};
