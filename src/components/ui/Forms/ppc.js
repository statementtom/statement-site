import React, { useRef, useState } from "react";
import { Section, Column, Content, Field, Control, Select } from "rbx";
import { useForm } from "react-hook-form/dist/react-hook-form.ie11";
import { ColumnGroup } from "rbx/grid/columns/column-group";

import generateContent from "../../../util/generateContent";

import { Close, LongRightArrow } from "../Icons";

import * as S from "./styles";
import { RECAPTCHA_KEY } from "./constants";
import encode from "../../../util/encode";
import BackgroundImage from "gatsby-background-image";

import { navigate } from "gatsby";
import { useMedia } from "react-use";

const PPCForm = ({ primary, items, uid }) => {
  const mobile = useMedia("(max-width: 768px)");
  const recaptchaRef = useRef(null);
  const formSectionsRef = useRef(null);
  const [success, setSuccess] = useState(false);
  const [honeyPot, setHoneyPot] = useState("");
  const [recaptcha, setRecaptcha] = useState("");
  const [recaptchaMessage, setRecaptchaMessage] = useState("");
  const { register, handleSubmit, reset, errors } = useForm();

  const handleScroll = () => {
    const top = formSectionsRef.current.offsetTop - 72;
    window.scroll({
      top,
      left: 0,
      behavior: "smooth"
    });
  };

  const onSubmit = data => {
    if (recaptcha === "") {
      setRecaptchaMessage("Please confirm you're not a robot.");
      return;
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": uid,
        "g-recaptcha-response": recaptcha,
        ...data
      })
    })
      .then(() => {
        if (mobile) {
          handleScroll();
        }
        setSuccess(true);
        reset();
        setRecaptchaMessage("");
        window.dataLayer.push({
          event: `${uid}-form-submit`
        });
      })
      .catch(() => setSuccess(false));
  };

  const content = generateContent({
    title: primary.content_title.html
  });

  const generatePath = ({ link_type, url }) => {
    switch (link_type) {
      case "Document":
        return {
          url,
          internal: true
        };
      case "Media":
        return {
          url,
          internal: false
        };
      default:
        return {
          url: "/",
          internal: true
        };
    }
  };

  return (
    <S.Container id="ppc-form" removeTopPadding={primary.content_top_padding}>
      <ColumnGroup className="is-mobile is-multiline">
        <Column
          paddingless
          mobile={{
            size: 12
          }}
          tablet={{
            size: 6
          }}
          desktop={{
            size: 5,
            offset: 1
          }}
        >
          <Section size="small">
            <form
              name={uid}
              method="POST"
              onSubmit={handleSubmit(onSubmit)}
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              data-netlify-recaptcha="true"
            >
              <ColumnGroup className="is-mobile is-multiline is-centered">
                <Column
                  paddingless
                  marginless
                  mobile={{
                    size: 12
                  }}
                  tablet={{
                    size: 12
                  }}
                  desktop={{
                    size: 10
                  }}
                >
                  <input type="hidden" name="form-name" value={uid} />
                  <p hidden>
                    <input
                      name="bot-field"
                      value={honeyPot}
                      onChange={e => setHoneyPot(e.target.value)}
                    />
                  </p>
                  <S.Title
                    dangerouslySetInnerHTML={{
                      __html: content
                    }}
                  />
                  <Field>
                    <Control>
                      <S.Input
                        required
                        color={errors.name ? "danger" : ""}
                        type="text"
                        placeholder="Name *"
                        name="name"
                        ref={register({ required: true })}
                      />
                    </Control>
                  </Field>
                  <Field>
                    <Control>
                      <S.Input
                        required
                        color={errors.name ? "danger" : ""}
                        type="text"
                        placeholder="Business Name *"
                        name="business_name"
                        ref={register({ required: true })}
                      />
                    </Control>
                  </Field>
                  <Field>
                    <Control>
                      <S.Input
                        required
                        color={errors.name ? "danger" : ""}
                        type="email"
                        placeholder="Work Email Address *"
                        name="work_email"
                        ref={register({ required: true })}
                      />
                    </Control>
                  </Field>
                  <Field>
                    <Control>
                      <S.Input
                        required
                        color={errors.name ? "danger" : ""}
                        type="text"
                        placeholder="Phone Number *"
                        name="phone_number"
                        ref={register({ required: true })}
                      />
                    </Control>
                  </Field>
                  <Field>
                    <Control>
                      <S.Select fullwidth>
                        <Select
                          name="help"
                          required
                          ref={register({
                            required: true
                          })}
                        >
                          <option value="" defaultValue>
                            How can we help?
                          </option>
                          <option value="New site build">New site build</option>
                          <Select.Option value="Replatform">
                            Replatform
                          </Select.Option>
                          <Select.Option value="Shopify site optimisation">
                            Shopify site optimisation
                          </Select.Option>
                        </Select>
                      </S.Select>
                    </Control>
                  </Field>
                  <Field>
                    <Control>
                      <S.Select fullwidth>
                        <Select
                          name="best_call_time"
                          required
                          ref={register({
                            required: true
                          })}
                        >
                          <option value="" defaultValue>
                            When’s the best time to call you?
                          </option>
                          <option value="Morning">Morning</option>
                          <Select.Option value="Afternoon">
                            Afternoon
                          </Select.Option>
                        </Select>
                      </S.Select>
                    </Control>
                  </Field>
                  <Field>
                    <Control>
                      <S.Recaptcha
                        ref={recaptchaRef}
                        sitekey={"6Ld94OUUAAAAAAm9H-JaPijn8vKF3y8xxTSzCXFL"}
                        onChange={value => setRecaptcha(value)}
                      />
                    </Control>
                  </Field>
                  <Field>
                    <Control style={{ textAlign: "right" }}>
                      {recaptchaMessage !== "" && (
                        <S.InlineNotification>
                          {recaptchaMessage}
                        </S.InlineNotification>
                      )}
                      <S.Button type="submit">
                        Submit <LongRightArrow size="20" fill="#fff" />
                      </S.Button>
                    </Control>
                  </Field>
                </Column>
              </ColumnGroup>
            </form>
          </Section>
        </Column>
        <Column
          id="ppc-form-sections"
          ref={formSectionsRef}
          paddingless
          mobile={{
            size: 12
          }}
          tablet={{
            size: 6
          }}
          desktop={{
            size: 5
          }}
        >
          {success ? (
            <S.SuccessOverlay>
              <S.SuccessOverlayIcon onClick={() => setSuccess(false)}>
                <Close />
              </S.SuccessOverlayIcon>
              <Content>
                <h3>Thank you for getting in touch,</h3>
                <h4>we will get back to you soon!</h4>
              </Content>
            </S.SuccessOverlay>
          ) : (
            <S.Items>
              {items.map((item, index) => {
                const content = generateContent({
                  preheading: item.content_preheading.html,
                  title: item.content_title.html
                });
                const { url, internal } = generatePath(item.content_link);
                const handleClick = (url, internal) => {
                  if (internal) {
                    navigate(url);
                  } else {
                    window.location.href = url;
                  }
                };
                return (
                  <S.Item
                    key={index}
                    onClick={() => handleClick(url, internal)}
                  >
                    <S.Image>
                      <BackgroundImage
                        fluid={
                          item.content_image.localFile.childImageSharp.fluid
                        }
                        backgroundColor="#000"
                        style={{ height: "100%" }}
                      />
                    </S.Image>
                    <S.Content
                      dangerouslySetInnerHTML={{
                        __html: content
                      }}
                    />
                  </S.Item>
                );
              })}
            </S.Items>
          )}
        </Column>
      </ColumnGroup>
    </S.Container>
  );
};

export default PPCForm;
