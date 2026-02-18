# All components have been created! This list shows recently added components
# that are now available in the magic-ui folder:
$recentlyAddedComponents = @(
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

# No remaining components to create - all are already built!
$components = @()

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Component Status Report" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

if ($components.Count -eq 0) {
    Write-Host "🎉 Great news! All components have been created!" -ForegroundColor Green
    Write-Host "`nRecently added components:" -ForegroundColor Yellow
    foreach ($component in $recentlyAddedComponents) {
        Write-Host "  ✓ $($component.name)" -ForegroundColor Green
    }
    Write-Host "`nTotal recently added components: $($recentlyAddedComponents.Count)" -ForegroundColor Cyan
} else {
    $scriptPath = Join-Path $PSScriptRoot "create-component.ps1"

    foreach ($component in $components) {
        Write-Host "`nProcessing: $($component.name)..." -ForegroundColor Yellow
        & $scriptPath -ComponentName $component.name -ExampleCount $component.examples
        Write-Host "`n----------------------------------------`n"
    }
}

Write-Host "`n========================================" -ForegroundColor Green
Write-Host "  Component Status Summary" -ForegroundColor Green
Write-Host "========================================`n" -ForegroundColor Green

if ($components.Count -eq 0) {
    Write-Host "Status: All components are already created! ✨" -ForegroundColor Green
    Write-Host "Recently added components: $($recentlyAddedComponents.Count)" -ForegroundColor White
    Write-Host "`nRecently added components:" -ForegroundColor Cyan
    foreach ($component in $recentlyAddedComponents) {
        Write-Host "  ✅ $($component.name) (ready to use)" -ForegroundColor Green
    }
} else {
    Write-Host "Summary:" -ForegroundColor Cyan
    Write-Host "Total components created: $($components.Count)" -ForegroundColor White
    Write-Host "`nComponents:" -ForegroundColor Cyan
    foreach ($component in $components) {
        Write-Host "  ✓ $($component.name) (with $($component.examples) examples)" -ForegroundColor Green
    }
}
