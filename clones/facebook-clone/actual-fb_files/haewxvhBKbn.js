if (self.CavalryLogger) {
  CavalryLogger.start_js(["4PpDU65"]);
}

__d(
  "AdPreferencesRootQuery.graphql",
  ["relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "opted_out_topic_subtitle",
        storageKey: null,
      };
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "AdPreferencesRootQuery",
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "AdPreferencesContentContextContainer_content",
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "AdPreferencesRootQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "AdPreferencesHubContent",
              kind: "LinkedField",
              name: "ad_preferences_hub_content",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "ad_preferences_title",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "advertisers_nav_bar_title",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "ad_topics_nav_bar_title",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "ad_settings_nav_bar_title",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "common_questions_title",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "common_question_one",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "common_question_answer_one",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "common_question_two",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "common_question_answer_two",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "data_section_header",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "survey_question_text",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "survey_response_text",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "sds_mode_text",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "sds_mode_title",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "AdPreferencesAdvertisersContent",
              kind: "LinkedField",
              name: "ad_preferences_advertisers_content",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "see_all_businesses",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "seen_advertisers_title",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "hidden_advertisers_title",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "clicked_advertisers_title",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "hidden_advertisers_button_text",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "clicked_advertisers_button_text",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "hide_ads_text",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "ads_hidden_text",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "visit_facebook_page_text",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "audience_based_row_title",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "audience_based_row_body",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "audience_based_body_content_prompt",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "dfca_detail_page_title",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "dfca_inclusion_card_title",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "dfca_exclusion_card_title",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "dfca_exclusion_example_link",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "dfca_exclusion_example_content",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "dfca_inclusion_opted_out_text",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "dfca_exclusion_opted_out_text",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "dfca_empty_inclusion_advertisers_text",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "dfca_empty_exclusion_advertisers_text",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "dfca_opt_out_confirmation_title",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "dfca_inclusion_opt_out_info_2",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "dfca_exclusion_opt_out_info_1",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "dfca_exclusion_opt_out_info_2",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "dfca_allow_button",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "dfca_dont_allow_button",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "dfca_checkbox_text",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "dfca_learn_more_title",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "dfca_learn_more_text_2",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "dfca_learn_more_text_3",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "empty_recent_advertisers_text",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "empty_businesses_text",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "AdPreferencesAudienceTargetingContent",
              kind: "LinkedField",
              name: "ad_preferences_audience_targeting_content",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "audience_row_title",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "audience_row_body",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "audience_page_title",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "audience_page_subtitle",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "profile_info_control_title",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "profile_info_control_body_1",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "profile_info_control_body_2",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "audience_interest_control_title",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "audience_interest_control_body",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "demographic_categories_control_title",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "demographic_categories_disclaimer_title",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "see_all_categories",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "removed_categories_title",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "no_match_bcts_description",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "removed_all_bcts_description",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "interest_categories_control_title",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "interest_categories_disclaimer_title",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "removed_interests_title",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "see_all_interests",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "no_match_interests_description",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "removed_all_interests_description",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "AdPreferencesAdSettingsContent",
              kind: "LinkedField",
              name: "ad_preferences_ad_settings_content",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "expandable_question_title",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "oba_row_title",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "oba_row_body",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "oba_control_title",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "ig_hardmatched_oba_control_title",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "ig_not_hardmatched_oba_control_title",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "oba_control_text",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "allowed_text",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "not_allowed_text",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "oba_question_1",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "oba_question_2",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "oba_question_3",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "oba_answer_1",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "ig_hardmatched_oba_answer_1",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "ig_not_hardmatched_oba_answer_1",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "oba_answer_2",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "ig_hardmatched_oba_answer_2",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "ig_not_hardmatched_oba_answer_2",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "oba_answer_3",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "ig_hardmatched_oba_answer_3",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "ig_not_hardmatched_oba_answer_3",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "ig_3pd_hardmatched_notice",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "ig_3pd_not_hardmatched_notice_header",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "ig_3pd_not_hardmatched_notice_body",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "off_fb_ads_page_title",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "off_fb_ads_page_subtitle",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "off_fb_ads_intro_para_1",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "off_fb_ads_intro_para_2",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "off_fb_ads_control_title",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "off_fb_ads_question_1",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "off_fb_ads_question_2",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "off_fb_ads_question_3",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "off_fb_ads_answer_1_part_1",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "off_fb_ads_answer_1_part_2",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "off_fb_ads_answer_1_part_3",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "off_fb_ads_answer_2",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "off_fb_ads_answer_3",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "social_interactions_row_title",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "social_interactions_row_body",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "only_me_text",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "social_interactions_intro_para_one",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "social_interactions_intro_para_two",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "social_interactions_intro_para_three",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "social_interactions_intro_para_five",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "social_interactions_ad_preview_page_name",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "social_interactions_ad_preview_page_subtitle",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "lat_grandfathering_notice",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "AdPreferencesSensitiveTopicsContent",
              kind: "LinkedField",
              name: "ad_preferences_sensitive_topics_content",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "sensitive_topics_section_header",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "sensitive_topics_section_subtitle",
                  storageKey: null,
                },
                a,
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "bottom_sheet_button_text",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "bottom_sheet_bottom_text",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "see_fewer_text",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "AdPreferencesRecentAdTopicsContent",
              kind: "LinkedField",
              name: "ad_preferences_recent_ad_topics_content",
              plural: !1,
              selections: [
                a,
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "see_all_topics",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "title",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "AdPreferencesFormResponsesContent",
              kind: "LinkedField",
              name: "ad_preferences_form_responses_content",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "form_responses_control_title",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "form_responses_control_body",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "saved_form_reponses_control_title",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "saved_from_responses_instruction_title",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "saved_from_responses_instruction_body_1",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "saved_from_responses_instruction_body_2",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "saved_from_responses_instruction_body_3",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "saved_from_responses_instruction_body_4",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "deleted_all_form_responses_description",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "form_response_delete_confirmation_title",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "form_response_delete_confirmation_body",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "form_response_delete_confirmation_checkbox",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "form_response_delete_confirmation_button",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "4706551299359402",
          metadata: {},
          name: "AdPreferencesRootQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.params.id != null &&
      b("relay-runtime").PreloadableQueryRegistry.set(a.params.id, a);
    e.exports = a;
  },
  null
);
__d(
  "CometAdPreferencesAdvertisersSectionQuery.graphql",
  ["relay-runtime"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = (function () {
      var a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        b = [a],
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      a = [a, c];
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "CometAdPreferencesAdvertisersSectionQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "TCAdvertiser",
              kind: "LinkedField",
              name: "tc_seen_advertisers",
              plural: !0,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "AdPreferencesAdvertiserList_advertisers",
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "TCAdvertiser",
              kind: "LinkedField",
              name: "tc_hidden_advertisers",
              plural: !0,
              selections: b,
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "TCAdvertiser",
              kind: "LinkedField",
              name: "tc_clicked_advertisers",
              plural: !0,
              selections: b,
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "CometAdPreferencesAdvertisersSectionQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "TCAdvertiser",
              kind: "LinkedField",
              name: "tc_seen_advertisers",
              plural: !0,
              selections: [
                c,
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "advertiser_id",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "alias",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "image_url",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_hidden",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "name",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "blurb",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "followers_count",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "page_url",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "website_url",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "TCAdvertiser",
              kind: "LinkedField",
              name: "tc_hidden_advertisers",
              plural: !0,
              selections: a,
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "TCAdvertiser",
              kind: "LinkedField",
              name: "tc_clicked_advertisers",
              plural: !0,
              selections: a,
              storageKey: null,
            },
          ],
        },
        params: {
          id: "4272149439489463",
          metadata: {},
          name: "CometAdPreferencesAdvertisersSectionQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.params.id != null &&
      b("relay-runtime").PreloadableQueryRegistry.set(a.params.id, a);
    e.exports = a;
  },
  null
);
__d(
  "XCometAdPreferencesControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")(
      "/adpreferences/{?tab}/",
      Object.freeze({}),
      void 0
    );
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "CometAdPreferencesLeftRail.react",
  [
    "ix",
    "AdPreferencesContentContext.react",
    "AdPreferencesLogging",
    "TetraListCell.react",
    "XCometAdPreferencesControllerRouteBuilder",
    "fbicon",
    "gkx",
    "react",
    "useCurrentRouteEntityKey",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = c("XCometAdPreferencesControllerRouteBuilder").buildURL({
        tab: "advertisers",
      }),
      k = c("XCometAdPreferencesControllerRouteBuilder").buildURL({
        tab: "ad_topics",
      }),
      l = c("XCometAdPreferencesControllerRouteBuilder").buildURL({
        tab: "ad_settings",
      });
    function a(a) {
      a =
        (a = d("AdPreferencesContentContext.react").useContent()) == null
          ? void 0
          : a.ad_preferences_hub_content;
      var b = c("useCurrentRouteEntityKey")(),
        e = (b == null ? void 0 : b.section) === "advertisers",
        f = (b == null ? void 0 : b.section) === "ad_topics",
        g = (b == null ? void 0 : b.section) === "ad_settings";
      b = (b == null ? void 0 : b.section) === "sds";
      var m = d("AdPreferencesLogging").useLogging(),
        n = m.logClick;
      return i.jsxs(i.Fragment, {
        children: [
          i.jsx(c("TetraListCell.react"), {
            addOnPrimary: {
              color: e ? "blue" : "gray",
              icon: d("fbicon")._(h("543729"), 20),
              size: 36,
              type: "contained-icon",
            },
            disabled: b,
            headline: a == null ? void 0 : a.advertisers_nav_bar_title,
            level: 4,
            linkProps: { url: j },
            onPress: function () {
              n({ entity: "advertiser_tab" });
            },
            selected: e,
            selectedBackground: c("gkx")("1535") ? "wash" : "highlight",
          }),
          i.jsx(c("TetraListCell.react"), {
            addOnPrimary: {
              color: f ? "blue" : "gray",
              icon: d("fbicon")._(h("621856"), 20),
              size: 36,
              type: "contained-icon",
            },
            disabled: b,
            headline: a == null ? void 0 : a.ad_topics_nav_bar_title,
            level: 4,
            linkProps: { url: k },
            onPress: function () {
              n({ entity: "ad_topics_tab" });
            },
            selected: f,
            selectedBackground: c("gkx")("1535") ? "wash" : "highlight",
          }),
          i.jsx(c("TetraListCell.react"), {
            addOnPrimary: {
              color: g ? "blue" : "gray",
              icon: d("fbicon")._(h("558620"), 20),
              size: 36,
              type: "contained-icon",
            },
            disabled: b,
            headline: a == null ? void 0 : a.ad_settings_nav_bar_title,
            level: 4,
            linkProps: { url: l },
            onPress: function () {
              n({ entity: "ad_settings_tab" });
            },
            selected: g,
            selectedBackground: c("gkx")("1535") ? "wash" : "highlight",
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometAdPreferencesContainer.react",
  [
    "AdPreferencesContentContext.react",
    "CometAdPreferencesLeftRail.react",
    "CometLeftRailComponent.react",
    "CometLeftRailHeader.react",
    "CometLegalFooter.react",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      a = d("AdPreferencesContentContext.react").useContent();
      a =
        (a == null
          ? void 0
          : (a = a.ad_preferences_hub_content) == null
          ? void 0
          : a.ad_preferences_title) || "";
      var b = h.jsx("div", {
        className: "dati1w0a ihqw7lf3 hv4rvrfc discj3wi",
        children: h.jsx(c("CometLegalFooter.react"), {}),
      });
      return h.jsx(c("CometLeftRailComponent.react"), {
        footer: b,
        header: h.jsx(c("CometLeftRailHeader.react"), { title: a }),
        primaryNav: h.jsx(c("CometAdPreferencesLeftRail.react"), {}),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "AdPreferencesRoot.react",
  [
    "AdPreferencesContentContext.react",
    "AdPreferencesRootQuery.graphql",
    "CometAdPreferencesContainer.react",
    "CometContentArea.react",
    "CometErrorBoundary.react",
    "CometErrorRoot.react",
    "CometLeftRailAndMainContentContainer.react",
    "CometPlaceholder.react",
    "CometRelay",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = d("react");
    function a(a) {
      var e = d("CometRelay").usePreloadedQuery(
        h !== void 0 ? h : (h = b("AdPreferencesRootQuery.graphql")),
        a.queries.headerQueryReference
      );
      return i.jsx(c("CometPlaceholder.react"), {
        fallback: null,
        children: i.jsx(c("CometErrorBoundary.react"), {
          fallback: function () {
            return i.jsx(c("CometErrorRoot.react"), {});
          },
          children: i.jsx(
            d("AdPreferencesContentContext.react")
              .AdPreferencesContentContextContainer,
            {
              content: e,
              children: i.jsx(c("CometLeftRailAndMainContentContainer.react"), {
                leftRailContent: i.jsx(
                  c("CometAdPreferencesContainer.react"),
                  {}
                ),
                leftRailHeading: "",
                mainContent: i.jsx(c("CometContentArea.react"), {
                  children: i.jsx(d("CometRelay").EntryPointContainer, {
                    entryPointReference: a.entryPoints.contentEntryPoint,
                    props: {},
                  }),
                }),
                mainContentHeading: "",
              }),
            }
          ),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "AdPreferencesNullState.react",
  ["NullStateLists", "TetraNullState.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      a = a.content;
      return h.jsx(c("TetraNullState.react"), {
        headline: a,
        icon: c("NullStateLists"),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "CometAdPreferencesAdvertisersSection.react",
  [
    "ix",
    "AdPreferencesAdvertiserList.react",
    "AdPreferencesBottomSurvey.react",
    "AdPreferencesContentContext.react",
    "AdPreferencesElementDivider.react",
    "AdPreferencesLogging",
    "AdPreferencesNullState.react",
    "CometAdPreferencesAdvertisersSectionQuery.graphql",
    "CometCard.react",
    "CometRelay",
    "CometUnitHeader.react",
    "TetraListCell.react",
    "XCometAdPreferencesControllerRouteBuilder",
    "fbicon",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i,
      j = d("react");
    function a(a) {
      var e;
      a = a.queries;
      a = d("CometRelay").usePreloadedQuery(
        i !== void 0
          ? i
          : (i = b("CometAdPreferencesAdvertisersSectionQuery.graphql")),
        a.advertisersSectionQueryReference
      );
      e =
        (e = d("AdPreferencesContentContext.react").useContent()) == null
          ? void 0
          : e.ad_preferences_advertisers_content;
      var f = (a == null ? void 0 : a.tc_hidden_advertisers.length) > 0,
        g = (a == null ? void 0 : a.tc_clicked_advertisers.length) > 0,
        k = c("XCometAdPreferencesControllerRouteBuilder").buildURL({
          section: "hidden_advertisers",
          tab: "advertisers",
        }),
        l = c("XCometAdPreferencesControllerRouteBuilder").buildURL({
          section: "clicked_advertisers",
          tab: "advertisers",
        }),
        m = d("AdPreferencesLogging").useLogging(),
        n = m.logClick;
      m = m.useImpressionLogging;
      m = m({ entity: "advertiser_tab" });
      return j.jsxs("div", {
        className: "oh7imozk bcvklqu9",
        ref: m,
        children: [
          (a == null ? void 0 : a.tc_seen_advertisers.length) > 0
            ? j.jsx("div", {
                className: "ofv0k9yr",
                children: j.jsxs(c("CometCard.react"), {
                  background: "white",
                  dropShadow: 1,
                  children: [
                    j.jsx(c("CometUnitHeader.react"), {
                      headline: e == null ? void 0 : e.seen_advertisers_title,
                      level: 3,
                    }),
                    j.jsx(c("AdPreferencesAdvertiserList.react"), {
                      advertisers: a == null ? void 0 : a.tc_seen_advertisers,
                      parentEntity: "advertiser_tab",
                    }),
                  ],
                }),
              })
            : j.jsxs(j.Fragment, {
                children: [
                  j.jsx(c("AdPreferencesNullState.react"), {
                    content:
                      e == null ? void 0 : e.empty_recent_advertisers_text,
                  }),
                  j.jsx(c("AdPreferencesElementDivider.react"), {}),
                ],
              }),
          (f || g) &&
            j.jsx(c("CometCard.react"), {
              background: "white",
              dropShadow: 1,
              children: j.jsxs("div", {
                className: "cxgpxx05 sj5x9vvc",
                children: [
                  f &&
                    j.jsx(c("TetraListCell.react"), {
                      addOnPrimary: {
                        color: "gray",
                        icon: d("fbicon")._(h("578903"), 20),
                        size: 36,
                        type: "contained-icon",
                      },
                      addOnSecondary: { type: "disclosure" },
                      headline:
                        e == null ? void 0 : e.hidden_advertisers_button_text,
                      linkProps: { url: k },
                      onPress: function () {
                        n({ entity: "hidden_advertisers_row" });
                      },
                      testid: void 0,
                    }),
                  g &&
                    j.jsx(c("TetraListCell.react"), {
                      addOnPrimary: {
                        color: "gray",
                        icon: d("fbicon")._(h("586897"), 20),
                        size: 36,
                        type: "contained-icon",
                      },
                      addOnSecondary: { type: "disclosure" },
                      headline:
                        e == null ? void 0 : e.clicked_advertisers_button_text,
                      linkProps: { url: l },
                      onPress: function () {
                        n({ entity: "clicked_advertisers_row" });
                      },
                      testid: void 0,
                    }),
                ],
              }),
            }),
          j.jsx("div", {
            className: "k3eq2f2k",
            children: j.jsx(c("AdPreferencesBottomSurvey.react"), {
              entity: "ad_prefs_main_page_advertisers_tab",
            }),
          }),
        ],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
