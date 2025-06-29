# ----- CONFIGURATION -----
$imageName      = "acwebsite"
$imageTag       = "latest"
$tarFile        = "${imageName}.tar"

$piUser         = "pi"
$piHost         = "raspberrypi.local"
$piPort         = 5232
$piTargetPath   = "/home/pi/$imageName.tar"
$containerName  = "acwebsite"
$hostPort       = 443
$containerPort  = 443

# ----- BUILD THE DOCKER IMAGE -----
Write-Host "Building Docker image..."
docker build --platform linux/arm64 -t "${imageName}:${imageTag}" .

# ----- SAVE TO TAR -----
Write-Host "Saving image to tar..."
docker save -o $tarFile "${imageName}:${imageTag}"

# ----- SCP TO RASPBERRY PI -----
Write-Host "Copying tar to Raspberry Pi..."
scp -P $piPort $tarFile "${piUser}@${piHost}:${piTargetPath}"

# ----- SSH INTO PI AND LOAD/RUN -----
$sshCommands = @"
docker load < ${piTargetPath}
docker stop ${containerName} || true
docker rm ${containerName} || true
docker run -d -p ${hostPort}:${containerPort} --name ${containerName} -v /etc/letsencrypt:/etc/letsencrypt:ro ${imageName}:${imageTag}
"@

Write-Host "Deploying on Raspberry Pi..."
ssh -p $piPort "${piUser}@${piHost}" $sshCommands

Write-Host "Done. Your site should be running"
