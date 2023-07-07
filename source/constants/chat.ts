import { faker } from "@faker-js/faker";
import type { Chat, Message, Media, File, Link, Music, Sound, Group } from "../types";

export const chatList: Chat[] = [...Array<Chat>(10)].map<Chat>(() => ({
  profile: {
    profileImage: faker.image.avatar(),
    username: faker.name.fullName(),
    lastSeen: faker.date.past(),
    bio: faker.helpers.arrayElement([faker.lorem.sentence(), faker.random.words(5)]),
    isOnline: faker.datatype.boolean(),
    phoneNumber: faker.phone.number("+## ### #######"),
  },
  messages: [...Array<Message>(Math.round(Math.random() * 20))].map<Message>(() => ({
    message: faker.helpers.arrayElement([faker.lorem.sentence(), faker.lorem.sentences(), faker.random.words(parseInt(faker.random.numeric()))]),
    sendAt: faker.date.past(),
    isSeen: faker.datatype.boolean(),
    isSender: faker.datatype.boolean(),
  })),
  media: [...Array<Media>(Math.round(Math.random() * 20))].map<Media>(() => ({
    thumbnail: faker.helpers.arrayElement([faker.image.abstract(680, 480, true), faker.image.animals(680, 480, true), faker.image.business(680, 480, true), faker.image.fashion(680, 480, true), faker.image.food(680, 480, true)]),
    isVideo: faker.datatype.boolean(),
    duration: `${faker.random.numeric()}.${faker.datatype.number(60)}`,
  })),
  files: [...Array<File>(Math.round(Math.random() * 20))].map<File>(() => ({
    thumbnail: faker.helpers.arrayElement([faker.image.abstract(680, 480, true), faker.image.animals(680, 480, true), faker.image.business(680, 480, true), faker.image.fashion(680, 480, true), faker.image.food(680, 480, true)]),
    name: faker.internet.domainWord(),
    format: faker.helpers.arrayElement([".png", ".jpg", ".jpeg", ".gif", ".pdf", ".svg", ".mp4", ".mp3"]),
    sendAt: faker.date.past(),
    size: `${faker.datatype.float({ max: 1000 })} ${faker.helpers.arrayElement(["KB", "MB"])}`,
  })),
  links: [...Array<Link>(Math.round(Math.random() * 20))].map<Link>(() => ({
    title: faker.internet.domainWord(),
    description: faker.random.words(5),
    url: faker.internet.url(),
    thumbnail: faker.internet.avatar(),
  })),
  musics: [...Array<Music>(Math.round(Math.random() * 20))].map<Music>(() => ({
    title: faker.music.songName(),
    description: faker.random.words(),
    thumbnail: faker.helpers.arrayElement([faker.image.abstract(680, 480, true), faker.image.animals(680, 480, true), faker.image.business(680, 480, true), faker.image.fashion(680, 480, true), faker.image.food(680, 480, true)]),
  })),
  sounds: [...Array<Sound>(Math.round(Math.random() * 20))].map<Sound>(() => ({
    sendAt: faker.date.past(),
    isSender: faker.datatype.boolean(),
  })),
  groups: [...Array<Group>(Math.round(Math.random() * 20))].map<Group>(() => ({
    name: faker.random.words(2),
    members: faker.random.numeric(2),
    profileImage: faker.helpers.arrayElement([faker.image.abstract(680, 480, true), faker.image.animals(680, 480, true), faker.image.business(680, 480, true), faker.image.fashion(680, 480, true), faker.image.food(680, 480, true)]),
  })),
}));
