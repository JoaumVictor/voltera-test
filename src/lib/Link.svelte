<script>
  import { classNames } from "../utils/shared";

  export let path = ""
  export let customColor = ""
</script>

<a href="{path}" target={customColor !== "" ? "_blank" : ""} class={classNames("link default", customColor)}>
  <slot />
</a>

<style>
  a {
    text-decoration: none;
    font-size: 1.2rem;
    cursor: pointer;
  }

  .default:hover {
    color: #c9c9c9;
  }

  .blue {
    color: #039aeb;
  }

  .blue:hover {
    color: #0183ca !important;
  }

  .green {
    color: #25d366;
  }

  .green:hover {
    color: #08a300 !important;
  }
</style>