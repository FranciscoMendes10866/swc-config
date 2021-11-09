import prisma from '@prisma/client';

export default class DatabaseConnection {
	public prisma: prisma.PrismaClient;

	constructor() {
		this.prisma = new prisma.PrismaClient();
	}
}
