import { PrismaClient, Prisma } from '@prisma/client';

export const prisma = new PrismaClient();

const colorData: Prisma.ColorCreateInput[] = [
  {
    name: 'red',
    hex: '#FF0000',
  },
  {
    name: 'orange',
    hex: '#FF7F00',
  },
  {
    name: 'yellow',
    hex: '#FFFF00',
  },
  {
    name: 'green',
    hex: '#00FF00',
  },
  {
    name: 'blue',
    hex: '#0000FF',
  },
  {
    name: 'indigo',
    hex: '#4B0082',
  },
  {
    name: 'violet',
    hex: '#9400D3',
  },
];

async function main() {
  console.log(`Start seeding ...`);
  const color = await prisma.color.createMany({
    data: colorData,
  });
  console.log(`Seeding finished.`, color);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
