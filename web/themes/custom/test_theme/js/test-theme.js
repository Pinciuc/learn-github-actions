/**
 * @file
 * Test Theme behaviors.
 */

(function ($, Drupal) {

  'use strict';

  /**
   * Behavior description.
   */
  Drupal.behaviors.testTheme = {
    attach: function (context, settings) {

      console.log('It works!');

    }
  };

} (jQuery, Drupal));
