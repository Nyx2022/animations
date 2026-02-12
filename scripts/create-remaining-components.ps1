$components = @(
    @{ name = "flickering-grid"; examples = 0 },
    @{ name = "grid-pattern"; examples = 0 },
    @{ name = "hero-video-dialog"; examples = 0 },
    @{ name = "hyper-text"; examples = 0 },
    @{ name = "interactive-hover-button"; examples = 0 },
    @{ name = "light-rays"; examples = 0 },
    @{ name = "line-shadow-text"; examples = 0 },
    @{ name = "morphing-text"; examples = 0 },
    @{ name = "neon-gradient-card"; examples = 0 },
    @{ name = "number-ticker"; examples = 0 },
    @{ name = "pulsating-button"; examples = 0 },
    @{ name = "rainbow-button"; examples = 0 },
    @{ name = "ripple"; examples = 0 },
    @{ name = "ripple-button"; examples = 0 },
    @{ name = "scroll-progress"; examples = 0 },
    @{ name = "shimmer-button"; examples = 0 },
    @{ name = "shiny-button"; examples = 0 },
    @{ name = "terminal"; examples = 0 },
    @{ name = "video-text"; examples = 0 },
    @{ name = "warp-background"; examples = 0 },
    @{ name = "word-rotate"; examples = 0 }
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
    Write-Host "  ✓ $($component.name) (with $($component.examples) examples)" -ForegroundColor Green
}
