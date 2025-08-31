'use server';

/**
 * @fileOverview AI-powered color palette generator based on mood or style.
 *
 * - generateColorPalette - A function that generates a color palette based on the given mood.
 * - GenerateColorPaletteInput - The input type for the generateColorPalette function.
 * - GenerateColorPaletteOutput - The return type for the generateColorPalette function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const GenerateColorPaletteInputSchema = z.object({
  mood: z
    .string()
    .describe("The desired mood or style for the color palette (e.g., 'cozy', 'modern', 'vibrant')."),
});
export type GenerateColorPaletteInput = z.infer<typeof GenerateColorPaletteInputSchema>;

const GenerateColorPaletteOutputSchema = z.object({
  palette: z
    .array(z.string())
    .describe('An array of color hex codes that represent the generated color palette.'),
  description: z
    .string()
    .describe('A description of the color palette and why it suits the given mood.'),
});
export type GenerateColorPaletteOutput = z.infer<typeof GenerateColorPaletteOutputSchema>;

export async function generateColorPalette(input: GenerateColorPaletteInput): Promise<GenerateColorPaletteOutput> {
  return generateColorPaletteFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateColorPalettePrompt',
  input: {schema: GenerateColorPaletteInputSchema},
  output: {schema: GenerateColorPaletteOutputSchema},
  prompt: `You are a professional color palette generator that creates visually appealing color schemes based on a given mood or style. The output must be in JSON format.

Given the mood: {{{mood}}},

generate a color palette and provide a short description of why this palette is suitable for the provided mood. Make sure that the hex codes in the palette are CSS compatible.

Example:
{
  "palette": ["#F0F8FF", "#FAEBD7", "#00FFFF", "#7FFFD4", "#F0FFFF"],
  "description": "This dreamy palette evokes a sense of fantasy and tranquility.  The light, airy colors are reminiscent of clouds and gentle breezes."
}
`,
});

const generateColorPaletteFlow = ai.defineFlow(
  {
    name: 'generateColorPaletteFlow',
    inputSchema: GenerateColorPaletteInputSchema,
    outputSchema: GenerateColorPaletteOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
