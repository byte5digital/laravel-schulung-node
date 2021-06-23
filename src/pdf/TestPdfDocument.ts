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
		const { width, height } = page.getSize()
		let startPos = 750
		const leftMargin = 60

		for (const dataLine of data){
			addLine(dataLine)
		}

		function addLine(pdfData){
			page.drawText(`${pdfData.title} ${pdfData.text}`, {
				y: startPos,
				x: leftMargin,
				size: 10,
				lineHeight: 11
			})
			startPos -= 20
		}

		return await pdf.saveAsBase64()

	}
}