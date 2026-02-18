$components = @(
    @{ name = "dock"; examples = 0 },
    @{ name = "icon-cloud"; examples = 0 },
    @{ name = "lens"; examples = 0 },
    @{ name = "orbiting-circles"; examples = 0 },
    @{ name = "pointer"; examples = 0 },
    @{ name = "progressive-blur"; examples = 0 },
    @{ name = "retro-grid"; examples = 0 },
    @{ name = "bento-grid"; examples = 0 },
    @{ name = "confetti"; examples = 0 },
    @{ name = "dither-shader"; examples = 0 },
    @{ name = "magic-card"; examples = 0 },
    @{ name = "smooth-cursor"; examples = 0 },
    @{ name = "stagger-text"; examples = 0 }
)

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Creating All Components" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

$scriptPath = Join-Path $PSScriptRoot "create-component.ps1"

foreach ($component in $components) {
    Write-Host "`nProcessing: $($component.name)..." -ForegroundColor Yellow
    & $scriptPath -ComponentName $component.name -ExampleCount $component.examples
    Write-Host "`n----------------------------------------`n"
}

Write-Host "`n========================================" -ForegroundColor Green
Write-Host "  All Components Created Successfully!" -ForegroundColor Green
Write-Host "========================================`n" -ForegroundColor Green

Write-Host "Summary:" -ForegroundColor Cyan
Write-Host "Total components created: $($components.Count)" -ForegroundColor White
Write-Host "`nComponents:" -ForegroundColor Cyan
foreach ($component in $components) {
    Write-Host ("  - {0} (with {1} examples)" -f $component.name, $component.examples) -ForegroundColor Green
}