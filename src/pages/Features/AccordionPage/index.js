import { Accordion } from "../../../components";

export default function AccordionPage() {
  return (
    <>
      <Accordion>
        <div title="Title 1.1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          suscipit atque rerum voluptates voluptatibus eaque ipsam expedita
          labore nihil, cumque sed id earum aliquid ad itaque ratione molestias
          veniam blanditiis!
        </div>
        <div title="Title 1.2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          suscipit atque rerum voluptates voluptatibus eaque ipsam expedita
          labore nihil, cumque sed id earum aliquid ad itaque ratione molestias
          veniam blanditiis! 2
        </div>
        <div title="Title 1.3">"Lorem ipsum dolor s3</div>
      </Accordion>
      <br />
      <Accordion allowMultipleOpens>
        <div title="Title 2.1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          suscipit atque rerum voluptates voluptatibus eaque ipsam expedita
          labore nihil, cumque sed id earum aliquid ad itaque ratione molestias
          veniam blanditiis!
        </div>
        <div title="Title 2.2" active>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          suscipit atque rerum voluptates voluptatibus eaque ipsam expedita
          labore nihil, cumque sed id earum aliquid ad itaque ratione molestias
          veniam blanditiis! 2
        </div>
        <div title="Title 2.3">"Lorem ipsum dolor s3</div>
      </Accordion>
      <div style={{ marginTop: "20px" }}>
        <pre>
          {`
OK  class "active" define open accordion          
OK  accordion stay open => class ".allowMultipleOpens"
OK  class ".accordion-flush"

OK  $accordion-padding-y:                 1rem;
OK  $accordion-padding-x:                 1.25rem;
OK  $accordion-color:                     $body-color;
OK  $accordion-bg:                        $body-bg;
OK  $accordion-border-width:              $border-width;
OK  $accordion-border-color:              rgba($black, .125);
OK  $accordion-border-radius:             $border-radius;
OK  $accordion-inner-border-radius:       subtract($accordion-border-radius, $accordion-border-width);

OK  $accordion-body-padding-y:            $accordion-padding-y;
OK  $accordion-body-padding-x:            $accordion-padding-x;

OK  $accordion-button-padding-y:          $accordion-padding-y;
OK  $accordion-button-padding-x:          $accordion-padding-x;
OK  $accordion-button-color:              $accordion-color;
OK  $accordion-button-bg:                 $accordion-bg;
OK  $accordion-transition:                $btn-transition, border-radius .15s ease;
OK  $accordion-button-active-bg:          tint-color($component-active-bg, 90%);
OK  $accordion-button-active-color:       shade-color($primary, 10%);

OK  $accordion-button-focus-border-color: $input-focus-border-color;
OK  $accordion-button-focus-box-shadow:   $btn-focus-box-shadow;

DEL $accordion-icon-width:                1.25rem;
DEL $accordion-icon-color:                $accordion-button-color;
DEL $accordion-icon-active-color:         $accordion-button-active-color;
OK  $accordion-icon-transition:           transform .2s ease-in-out;
DEL $accordion-icon-transform:            rotate(-180deg);

DEL $accordion-button-icon:               url("...icon url");
DEL $accordion-button-active-icon:        url("...icon url");

ADD $accordion-icon-size:                 1.25rem !default;`}
        </pre>
      </div>
    </>
  );
}
