export const BrandLogoLeft = () => {
  return (
    <a href="/" aria-label="Home" className="flex items-center gap-3">
      <img 
        src="/logo.png"
        alt="Paxxxion Sex Shop"
        className="h-10 w-auto object-contain" 
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement!.innerHTML = '<span class="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Paxxxion</span>';
        }}
      />
      <span className="text-sm text-muted-foreground hidden sm:block">Sex Shop</span>
    </a>
  )
}