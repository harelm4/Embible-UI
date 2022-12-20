$templatesPath="../../templates"
$staticPath="../../static"
$indexPath="dist/ui/index.html"
$distAllPath="dist/ui/*"
$assetsPath="src/assets"
#build
Write-Output "Building..."
ng build --prod --build-optimizer --baseHref="/static/"
Write-Output "starting to move files from dist to flask foldors"
#template
if (Test-Path $indexPath -PathType Leaf) {
  Get-ChildItem $indexPath -file | Move-Item -Destination $templatesPath -force
  Write-Output "index.html moved"
}
#static
if (Test-Path $distAllPath -PathType Leaf) {
  Get-ChildItem -Path $distAllPath -Recurse -File | Move-Item -Force -Destination $staticPath
  Write-Output "static files moved"
}
#assets
Copy-Item -Path $assetsPath -Destination $staticPath -Recurse -force
Write-Output "assets copied"
