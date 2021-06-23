import { PDFDocument } from "pdf-lib";

export interface IUser {
	name: string
	email: string
	id: number
}

export interface IPdfData{
	title: string,
	text: string,
	user: IUser
}

export class TestPdfDocument {
	static async createDocument(
		data: IPdfData[]
	){
		const pdf = await PDFDocument.create()
		let page = pdf.addPage()
	}
}