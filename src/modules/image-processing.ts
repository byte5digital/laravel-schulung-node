import Jimp from "jimp"
import * as fs from "fs"
import _ from "lodash"

export interface IImage {
	hash: string
	originalImage: string
	compareImage: string
	distance: number
}

export async function processImageFolder(): Promise<IImage[] | undefined> {
	const allFilesInDir = fs.readdirSync("images")
	let results = [] as IImage[]
	for (const originalFile of allFilesInDir) {
		const originalFileJimpResult = await Jimp.read(`images/${originalFile}`)
		for (const compareFile of allFilesInDir) {
			const compareFileJimpResult = await Jimp.read(`images/${compareFile}`)
			const imageDiff = Jimp.diff(originalFileJimpResult, compareFileJimpResult)
			results = [...results, {
				hash: imageDiff.image.hash(),
				originalImage: originalFile,
				compareImage: compareFile,
				distance: imageDiff.percent
			}]
		}
	}
	
	
	const groupedResults = _.groupBy(results, (image)=>image.originalImage)
	
	console.log(groupedResults)
	
	return undefined
}