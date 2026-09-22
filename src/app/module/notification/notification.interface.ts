import type { NotificationType } from "../../../../generated/prisma/enums";

export interface ICreateNotificationInput {
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
}
