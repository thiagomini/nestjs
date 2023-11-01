import { EntitySchema } from "@mikro-orm/core";
import { BazEntity } from './baz.entity.ts'

export const bazEntitySchema = new EntitySchema<BazEntity>({
  class: BazEntity,
  extends: 'BaseEntity',
  properties: {
    name: {
      type: String,
    },
  },
})