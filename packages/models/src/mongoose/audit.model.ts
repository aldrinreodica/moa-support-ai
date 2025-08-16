import { model, models, Schema } from 'mongoose'
import { IAudit } from '../schemas/audit.schema'

const auditSchema = new Schema<IAudit>(
  {
    userId: { type: String, ref: 'User', required: true },
    action: { type: String, required: true },
    timestamp: { type: String, default: Date.now().toString() },
    details: { type: String },
  },
  {
    timestamps: true,
  }
)

export const Audit = models.Audit || model<IAudit>('Audit', auditSchema)
