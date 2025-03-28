const content = {
  terms_of_use: {
    title: 'TERMS',
    description: 'Añadir términos y privacidad para cumplir con los requisitos de cumplimiento.',
    terms_of_use: 'Terms of use URL',
    terms_of_use_placeholder: 'https://your.terms.of.use/',
    privacy_policy: 'Privacy policy URL',
    privacy_policy_placeholder: 'https://your.privacy.policy/',
    agree_to_terms: 'Aceptar los términos',
    agree_policies: {
      automatic: 'Continuar aceptando los términos automáticamente',
      manual_registration_only:
        'Requerir acuerdo con la casilla de verificación solo en el registro',
      manual:
        'Requerir acuerdo con la casilla de verificación tanto en el registro como al iniciar sesión',
    },
  },
  languages: {
    title: 'LANGUAGES',
    enable_auto_detect: 'Enable auto-detect',
    description:
      "Your software detects the user's locale setting and switches to the local language. You can add new languages by translating UI from English to another language.",
    manage_language: 'Manage language',
    default_language: 'Default language',
    default_language_description_auto:
      'The default language will be used when the detected user language isn’t covered in the current language library.',
    default_language_description_fixed:
      'When auto-detect is off, the default language is the only language your software will show. Turn on auto-detect for language extension.',
  },
  support: {
    title: 'SOPORTE',
    subtitle:
      'Muestra tus canales de soporte en las páginas de error para la asistencia rápida a usuarios.',
    support_email: 'Correo electrónico de soporte',
    support_email_placeholder: 'support@email.com',
    support_website: 'Sitio web de soporte',
    support_website_placeholder: 'https://your.website/support',
  },
  manage_language: {
    title: 'Manage language',
    subtitle:
      'Localize the product experience by adding languages and translations. Your contribution can be set as the default language.',
    add_language: 'Add Language',
    logto_provided: 'Logto provided',
    key: 'Key',
    logto_source_values: 'Logto source values',
    custom_values: 'Custom values',
    clear_all_tip: 'Clear all values',
    unsaved_description: 'Changes won’t be saved if you leave this page without saving.',
    deletion_tip: 'Delete the language',
    deletion_title: 'Do you want to delete the added language?',
    deletion_description:
      'After deletion, your users won’t be able to browse in that language again.',
    default_language_deletion_title: 'Default language can’t be deleted.',
    default_language_deletion_description:
      '{{language}} is set as your default language and can’t be deleted. ',
  },
};

export default Object.freeze(content);
