/// <reference types="Cypress" />

import { Before } from 'cypress-cucumber-preprocessor/steps'

Before(() => cy.visit('/login'))