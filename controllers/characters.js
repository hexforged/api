/**
 * $KYAULabs: characters.js,v 0.1.0 2023/06/28 01:57:49 kyau Exp $
 * ▄▄▄▄ ▄▄▄▄ ▄▄▄▄▄▄▄▄▄ ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 * █ ▄▄ ▄ ▄▄ ▄ ▄▄▄▄ ▄▄ ▄    ▄▄   ▄▄▄▄ ▄▄▄▄  ▄▄▄ ▀
 * █ ██ █ ██ █ ██ █ ██ █    ██   ██ █ ██ █ ██▀  █
 * ■ ██▄▀ ██▄█ ██▄█ ██ █ ▀▀ ██   ██▄█ ██▄▀ ▀██▄ ■
 * █ ██ █ ▄▄ █ ██ █ ██ █    ██▄▄ ██ █ ██ █  ▄██ █
 * ▄ ▀▀ ▀ ▀▀▀▀ ▀▀ ▀ ▀▀▀▀    ▀▀▀▀ ▀▀ ▀ ▀▀▀▀ ▀▀▀  █
 * ▀▀▀▀▀▀▀▀▀▀▀▀▀▀ ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ ▀▀▀▀▀▀▀▀▀▀▀▀▀
 *
 * Hexforged - RESTful API Server
 * Copyright (C) 2023 KYAU Labs (https://kyaulabs.com)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

// @desc    Get all active characters
// @route   GET /characters
// @access  Private
exports.getCharacters = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json+vnd.hexforged;version=1.0.0');
    res.status(200).json({
        success: true,
        message: 'Show all active characters.'
    });
};

// @desc    Get a specific characters
// @route   GET /characters/:id
// @access  Public
exports.getCharacter = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json+vnd.hexforged;version=1.0.0');
    res.status(200).json({
        success: true,
        message: `Show character ${req.params.id}.`
    });
};

// @desc    Create a new character
// @route   POST /characters
// @access  Private
exports.createCharacter = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json+vnd.hexforged;version=1.0.0');
    res.status(200).json({
        success: true,
        message: 'Create new character'
    });
};

// @desc    Update a specific character
// @route   PUT /characters/:id
// @access  Private
exports.updateCharacter = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json+vnd.hexforged;version=1.0.0');
    res.status(200).json({
        success: true,
        message: `Update character ${req.params.id}.`
    });
};

// @desc    Delete a specific users characters
// @route   DELETE /characters/:id
// @access  Public
exports.deleteCharacter = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json+vnd.hexforged;version=1.0.0');
    res.status(200).json({
        success: true,
        message: `Delete character ${req.params.id}.`
    });
};
