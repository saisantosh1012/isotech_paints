'use server';

/**
 * @fileOverview AI-powered color palette generator based on mood or style.
 *
 * - generateColorPaletteFromMood - A function that generates a color palette based on the given mood.
 * - GenerateColorPaletteFromMoodInput - The input type for the generateColorPaletteFromMood function.
 * - GenerateColorPaletteFromMoodOutput - The return type for the generateColorPaletteFromMood function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const GenerateColorPaletteFromMoodInputSchema = z.object({
  mood: z
    .string()
    .describe("The desired mood or style for the color palette (e.g., 'cozy', 'modern', 'vibrant')."),
});
export type GenerateColorPaletteFromMoodInput = z.infer<typeof GenerateColorPaletteFromMoodInputSchema>;

const GenerateColorPaletteFromMoodOutputSchema = z.object({
  palette: z
    .array(z.string())
    .describe('An array of color hex codes that represent the generated color palette.'),
  description: z
    .string()
    .describe('A description of the color palette and why it suits the given mood.'),
});
export type GenerateColorPaletteFromMoodOutput = z.infer<typeof GenerateColorPaletteFromMoodOutputSchema>;

export async function generateColorPaletteFromMood(input: GenerateColorPaletteFromMoodInput): Promise<GenerateColorPaletteFromMoodOutput> {
  return generateColorPaletteFromMoodFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateColorPaletteFromMoodPrompt',
  input: {schema: GenerateColorPaletteFromMoodInputSchema},
  output: {schema: GenerateColorPaletteFromMoodOutputSchema},
  prompt: `You are a professional color palette generator that creates visually appealing color schemes based on a given mood or style. The output must be in JSON format. Respond only with valid JSON.

Given the mood: {{{mood}}},

generate a color palette (as a JSON array of hex codes) and provide a short description of why this palette is suitable for the provided mood. Make sure that the hex codes in the palette are CSS compatible.

Example:
{
  "palette": ["#F0F8FF", "#FAEBD7", "#00FFFF", "#7FFFD4", "#F0FFFF"],
  "description": "This dreamy palette evokes a sense of fantasy and tranquility.  The light, airy colors are reminiscent of clouds and gentle breezes."
}
`,
});

const generateColorPaletteFromMoodFlow = ai.defineFlow(
  {
    name: 'generateColorPaletteFromMoodFlow',
    inputSchema: GenerateColorPaletteFromMoodInputSchema,
    outputSchema: GenerateColorPaletteFromMoodOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
