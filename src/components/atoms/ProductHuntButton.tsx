export function ProductHuntButton() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<a href="https://www.producthunt.com/posts/streekapp?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-streekapp" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=797856&theme=neutral&t=1737306549800" alt="StreekApp - The&#0032;ultimate&#0032;habit&#0032;tracker | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>`
      }}
    ></div>
  );
}
