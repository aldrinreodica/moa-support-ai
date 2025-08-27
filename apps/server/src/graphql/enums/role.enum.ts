import { registerEnumType } from '@nestjs/graphql';

export enum UserRole {
  SUPERADMIN = 'SUPERADMIN',
  ADMIN = 'ADMIN',
  USER = 'USER',
}

registerEnumType(UserRole, {
  name: 'UserRole',
  description: 'Roles of the user',
  valuesMap: {
    SUPERADMIN: { description: 'Super Administrator with full access' },
    ADMIN: { description: 'Administrator with elevated access' },
    USER: { description: 'Regular user with standard access' },
  },
});
