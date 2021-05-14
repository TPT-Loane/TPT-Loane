import { UserDTO } from '../dto/user.dto';
import { User } from '../entities/user.entity';

export const toUserDTO = (user: User): UserDTO => {
  const userDTO: UserDTO = {
    id: user.id,
    username: user.username,
    email: user.email,
    phone: user.phone,
    full_name: user.full_name,
    role: user.role,
    registration_date: user.registration_date,
    personal_code: user.personal_code,
  };
  return userDTO;
};
