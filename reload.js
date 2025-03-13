const { exec } = require('child_process')
const path = require('path')

const reload = async (req, res) => {
	const scriptPath = path.join(__dirname, 'reload.sh')
	const isWindows = process.platform === 'win32'
	const command = isWindows ? `bash ${scriptPath}` : `sh ${scriptPath}`

	exec(command, (error, stdout, stderr) => {
		if(error) { console.log(error.message, stderr) }
	})
	res.json({ data: true, message: "Run new PM2 reload action" })
}

module.exports = reload
