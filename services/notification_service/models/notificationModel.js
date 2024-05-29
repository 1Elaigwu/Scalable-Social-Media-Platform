const mongoose = require('mongoose');
const { Schema } = mongoose;

const notificationSchema = new Schema({
    notification_id: { type: Schema.Types.ObjectId, required: true },
    user_id: { type: Schema.Types.ObjectId, required: true },
    message: { type: String, required: true },
    read: { type: Boolean, default: false },
    created_at: { type: Date, default: Date.now }
});

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
